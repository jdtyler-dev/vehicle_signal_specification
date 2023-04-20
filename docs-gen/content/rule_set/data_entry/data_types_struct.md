---
title: "Struct Types"
date: 2019-08-04T11:11:48+02:00
weight: 15
---

*COVESA is in the process of introducing struct support.*
*It is a still an experimental feature, and information on this page may be incorrect, may change, or may not be supported by tooling yet!*

## Introduction

VSS has historically supported only the following types:

* Integer-based types (e.g. uint8, int32)
* Float-based types (float, double)
* String
* Boolean

In addition to this VSS arrays of the types given above has been supported.
This has been considered insufficient for some use-cases.
Typical examples are when something cannot be described by a single value, but multiple values are needed.

A few hypothetical examples include:

* GPS locations, where latitude and longitude must be handled together
* Obstacles - where each obstacle may contain information like category, probability and location
* Errors/Warnings - where each item might contain information on category and priority as well as time stamp

Based on this a syntax for supporting structs in VSS has been defined

## Intended usage

The struct support in VSS is introduced to facilitate logical binding/grouping of data that originates from the same source.
It is intended to be used only when it is important that the data is read or written in an atomic operation.
It is not intended to be used to specify how data shall be packaged and serialized when transported.

By this reason VSS-project will not introduce smaller datatypes (like `uint1`,`uint4`) to enable bit-encoding of data.
The order of elements in a struct is from a VSS perspective considered as arbitrary.
The VSS project will by this reason not publish guidelines on how to order items in the struct to minimize size,
and no concept for introducing padding will exist.

Structs shall be used in VSS standard catalog only when considered to give a significant advantage compared to using only primitive types.

## Structs vs. Aggregate

VSS supports a keyword `aggregate` that can be used on [branches](https://covesa.github.io/vehicle_signal_specification/rule_set/branches/)
to indicate that the branch preferably shall be read and written in atomic operations.
The keyword is however currently not used in the standard catalog, and it is not known if any implementation exists that actually consider it.
There have been criticism that `aggregate` changes the semantic meaning of branches and signals, i.e. that a signal is no longer handed as an independent object.
The exact meaning of `aggregate` is furthermore not well defined by VSS.
Shall for example a write request (or update of sensor values) be rejected by an implementation
if not all signals in the branch are updated in the same operation?
Semantic interpretation is also ambiguous if the branch contains a mix of sensors, attributes and actuators.
Using structs as datatype is better aligned with the view that VSS signals are independent objects,
and the semantic ambiguities related to `aggregate` are not present for structs.

Aggregate could however be useful as information on deployment level.
It gives the possibility to indicate that in this particular deployment the signals in the branch shall be treated as an aggregate.
Exact meaning of the `aggregate` keyword is then deployment specific.
With this view, aggregate shall never be used in the standard catalog, but can be used in overlays for deployment-specific purposes.

## General Idea and Basic Semantics

A signal of struct type shall be defined in the same way as other VSS signals,
the only difference would be that instead of using a primitive type there shall be a reference to a struct datatype.
This means that structs can be used for all types of VSS signals (i.e. sensor, attribute and actuator).
If a signal of struct type is sent or received, VSS expects all included items to have valid values, i.e. all items are mandatory.
For example, if a struct contains the items A, B and C - then it is expected that the sent signal contains value for all items.
If some items are considered optional then the value range of the items must be adapted to include values indicating "not available" or "undefined",
or additional items needs to be added to indicate which items that have valid values.

VSS makes no assumption on how structs are transferred or stored by implementations.
It is however expected that they are read and written by atomic operations.
This means that the data storage shall be "locked" while the items of the struct are read, preventing changes to happen while reading/writing the items.

Structs shall be defined in a separate tree. This means that signal definitions and types cannot exist in the same files.
Tooling must thus accept one (or more) parameters for specifying type definition(s)

The top level types file (e.g. `vss_types.vspec`) can refer to other type files similar to the
[top VSS file](https://github.com/COVESA/vehicle_signal_specification/blob/master/spec/VehicleSignalSpecification.vspec).
Tooling may in the future support overlays for type declarations similar to how it is supported for signals.

For current vss-tools support for structs see [documentation](https://github.com/COVESA/vss-tools/blob/master/docs/vspec2x.md) in the vss-tools repository.

## Naming Restrictions

The VSS syntax and tooling shall not enforce any restrictions on naming for the type tree.
It may even use the same branch structure as the signal tree.
This means that it theoretically at the same time could exist both a signal `A.B.C` and a struct `A.B.C`.
This is not a problem as it always from context is clear whether a name refers to a signal or a type.

## Simple Definition and Usage

This could be a hypothetical content of a VSS type file

```
Types:
  type: branch

Types.DeliveryInfo:
  type: struct
  description: A struct type containing info for each delivery

Types.DeliveryInfo.Address:
  datatype: string
  type: property
  description: Destination address

Types.DeliveryInfo.Receiver:
  datatype: string
  type: property
  description: Name of receiver
```

This struct definition could then be referenced from the VSS signal tree

```
Delivery:
  datatype: Types.DeliveryInfo
  type: sensor
```

The type file may contain sub-branches and `#include`-statements just like regular VSS files

```
Types:
  type: branch

Types.Powertrain:
  type: branch
  description: Powertrain types.
#include Powertrain/Powertrain.vspec Types.Powertrain

```

## Name resolution

Two ways of referring to a type shall be considered correct:

In Type Tree:
* Reference by absolute path
* Reference by (leaf) name to a struct definition within the same branch

In Signal Tree:
* Reference by absolute path
* Reference by (leaf) name to a struct definition within a branch with the same name in the type tree.
**Note that the experimental feature supports only absolute path name resolution in the signal tree.**

Relative paths (e.g. `../Powertrain.SomeStruct`) shall not be supported.
Structs in parent branches will not be visible, in those cases absolute path needs to be used instead.

*The reference by leaf name is applicable only for structs referencing other structs, and for the special case that the type branch has the same name/path as the signal branch!*

Parsers shall first look for a matching type in a branch with the same name, and if not found consider the name given to be an absolute name.

Example:

```
A.B.C:
  datatype: Types.D
  type: sensor
```

The parser shall first check if a type `A.B.Types.D` exist in the type tree, and if so use it.
If not found it shall search for the type `Types.D` in the type tree.
**Note that the experimental feature supports only exact name resolution in the signal tree.**

## Expectations on VSS implementations (e.g. VISS, KUKSA.val)

It is expected of implementations to support atomic read/write/subscribe of complete signals defined with struct datatype.
They may support read of parts of signal, e.g. `DeliveryList.Receiver`

## Array Support

It is allowed to use a struct type in an array


```
DeliveryList:
  datatype: Types.DeliveryInfo[]
  type: sensor
  description: List of deliveries
```

By default the array has an arbitrary number of element and may be empty.
If a fixed size array is wanted the keyword `arraysize` can be used to specify size:

```
DeliveryList:
  datatype: Types.DeliveryInfo[]
  arraysize: 5
  type: sensor
  description: List of deliveries
```


## Expectations on VSS implementations (e.g. VISS, KUKSA.val)

For array types (like above) VSS implementations may support several mechanisms

* It is expected that they can support read/write/subscribe of the whole array, i.e. write all or read all in the same request
* They may optionally support additional operations like
    * Writing/Reading a single instance, e.g. `DeliveryList[2]` (index mechanism is implementation dependent)
    * Appending/Deleting individual instances
    * Searching for instances with specific conditions.

## Structure in Structure

It is allowed to refer to a structure type from within a structure

```
OpenHours:
  type: struct
  description: A struct type containing information on open hours

OpenHours.Open:
  datatype: uint8
  type: property
  max: 24
  description: Time the address opens

OpenHours.Close:
  datatype: uint8
  type: property
  max: 24
  description: Time the address close

DeliveryInfo:
  type: struct
  description: A struct type containing info for each delivery

DeliveryInfo.Address:
  datatype: string
  type: property
  description: Destination address

DeliveryInfo.Receiver:
  datatype: string
  type: property
  description: Name of receiver

DeliveryInfo.Open:
  datatype: OpenHours
  type: property
  description: When is receiver available

```

## Order of declaration/definition

The order of declaration/definition shall not matter.
As signals and types are defined in different trees this is a topic only for struct definitions referring to other struct definitions.
A hypothetical example is shown below. An item in the struct `DeliveryInfo` can refer to the struct `OpenHours` even if that struct
is defined further down in the same file.

```
DeliveryInfo:
  type: struct
  description: A struct type containing info for each delivery

...

DeliveryInfo.Open:
  datatype: OpenHours
  type: property
  description: When is receiver available

OpenHours:
  type: struct
  description: A struct type containing information on open hours

...

```

## Inline Struct

Inline/anonymous structs shall not be supported!

## Default Values

VSS supports [default values for attributes](/vehicle_signal_specification/rule_set/data_entry/attributes/),
and there is a [discussion](https://github.com/COVESA/vehicle_signal_specification/issues/377)
to allow it also for sensors/actuators.

Default values are not supported for signals of struct type.
This also mean that VSS does not need to specify notation for struct values.
An exception is arrays of struct-types, where "empty array", i.e. `[]` shall be supported as default value.

It shall be possible to define default values for properties (unless the item is of struct type).
If all items of a struct type have default values,
then a signal (or item) using the struct type is also considered to have a default value.

## Allowed Values

VSS supports [specification of allowed values](https://covesa.github.io/vehicle_signal_specification/rule_set/data_entry/allowed/).
As of today it is theoretically supported for all datatypes, but there is an [issue](https://github.com/COVESA/vehicle_signal_specification/issues/502)
discussing if it is to be supported only for string data and possible integer-based types.

Using `allowed` for `type: property` is allowed (if `allowed` is supported for the used datatype).
Using `allowed` for signals and items of struct type or array of struct type is not allowed.
