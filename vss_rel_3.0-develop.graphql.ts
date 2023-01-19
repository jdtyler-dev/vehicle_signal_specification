import { gql } from 'apollo-server';

const Vehicle = gql`
   """
   High-level vehicle data.
   """
   type Vehicle {
      """
      Supported Version of VSS
      """
      versionVSS: Vehicle_VersionVSS

      """
      Attributes that identify a vehicle
      """
      vehicleIdentification: Vehicle_VehicleIdentification

      """
      State of the supply voltage of the control units (usually 12V).
      """
      lowVoltageSystemState: String

      """
      Vehicle speed
      """
      speed: Float

      """
      Odometer reading, total distance travelled during the lifetime of the vehicle.
      """
      travelledDistance: Float

      """
      Current trip meter reading
      """
      tripMeterReading: Float

      """
      Ambient air temperature outside the vehicle.
      """
      ambientAirTemperature: Float

      """
      Indicates whether the vehicle is stationary or moving
      """
      isMoving: Boolean

      """
      Average speed for the current trip
      """
      averageSpeed: Float

      """
      Spatial acceleration
      """
      acceleration: Vehicle_Acceleration

      """
      Spatial rotation
      """
      angularVelocity: Vehicle_AngularVelocity

      """
      The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
      """
      roofLoad: Int

      """
      The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
      """
      cargoVolume: Float

      """
      The CO2 emissions.
      """
      emissionsCO2: Int

      """
      Current overall Vehicle weight. Including passengers, cargo and other load inside the car.
      """
      currentOverallWeight: Int

      """
      Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.
      """
      curbWeight: Int

      """
      Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
      """
      grossWeight: Int

      """
      Maximum weight of trailer.
      """
      maxTowWeight: Int

      """
      Maximum vertical weight on the tow ball of a trailer.
      """
      maxTowBallWeight: Int

      """
      Overall vehicle length.
      """
      length: Int

      """
      Overall vehicle height.
      """
      height: Int

      """
      Overall vehicle width.
      """
      width: Int

      """
      Trailer signals
      """
      trailer: Vehicle_Trailer

      """
      The current latitude and longitude of the vehicle.
      """
      currentLocation: Vehicle_CurrentLocation

      """
      Powertrain data for battery management, etc.
      """
      powertrain: Vehicle_Powertrain

      """
      All body components.
      """
      body: Vehicle_Body

      """
      All in-cabin components, including doors.
      """
      cabin: Vehicle_Cabin

      """
      All Advanced Driver Assist Systems data.
      """
      aDAS: Vehicle_ADAS

      """
      All data concerning steering, suspension, wheels, and brakes.
      """
      chassis: Vehicle_Chassis

      """
      OBD data.
      """
      oBD: Vehicle_OBD

      """
      Driver data.
      """
      driver: Vehicle_Driver

      """
      Service data.
      """
      service: Vehicle_Service

   }

   """
   Supported Version of VSS
   """
   type Vehicle_VersionVSS {
      """
      Supported Version of VSS - Major version
      """
      major: Int

      """
      Supported Version of VSS - Minor version
      """
      minor: Int

      """
      Supported Version of VSS - Patch version
      """
      patch: Int

      """
      Label to further describe the version
      """
      label: String

   }

   """
   Attributes that identify a vehicle
   """
   type Vehicle_VehicleIdentification {
      """
      17-character Vehicle Identification Number (VIN) as defined by ISO 3779
      """
      vIN: String

      """
      3-character World Manufacturer Identification (WMI) as defined by ISO 3780
      """
      wMI: String

      """
      Vehicle brand or manufacturer
      """
      brand: String

      """
      Vehicle model
      """
      model: String

      """
      Model year of the vehicle
      """
      year: Int

      """
      The ACRISS Car Classification Code is a code used by many car rental companies.
      """
      aCRISSCode: String

      """
      Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
      """
      bodyType: String

      """
      The date of the first registration of the vehicle with the respective public authorities.
      """
      dateVehicleFirstRegistered: String

      """
      Indicates that the vehicle meets the respective emission standard.
      """
      meetsEmissionStandard: String

      """
      The date of production of the item, e.g. vehicle.
      """
      productionDate: String

      """
      The date the item e.g. vehicle was purchased by the current owner.
      """
      purchaseDate: String

      """
      The release date of a vehicle model (often used to differentiate versions of the same make and model).
      """
      vehicleModelDate: String

      """
      A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
      """
      vehicleConfiguration: String

      """
      The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
      """
      vehicleSeatingCapacity: Int

      """
      Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.
      """
      vehicleSpecialUsage: String

      """
      The color or color combination of the interior of the vehicle.
      """
      vehicleinteriorColor: String

      """
      The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).
      """
      vehicleinteriorType: String

      """
      A textual description of known damages, both repaired and unrepaired.
      """
      knownVehicleDamages: String

   }

   """
   Spatial acceleration
   """
   type Vehicle_Acceleration {
      """
      Vehicle acceleration in X (longitudinal acceleration).
      """
      longitudinal: Float

      """
      Vehicle acceleration in Y (lateral acceleration).
      """
      lateral: Float

      """
      Vehicle acceleration in Z (vertical acceleration).
      """
      vertical: Float

   }

   """
   Spatial rotation
   """
   type Vehicle_AngularVelocity {
      """
      Vehicle rotation rate along X (longitudinal).
      """
      roll: Int

      """
      Vehicle rotation rate along Y (lateral).
      """
      pitch: Int

      """
      Vehicle rotation rate along Z (vertical).
      """
      yaw: Int

   }

   """
   Trailer signals
   """
   type Vehicle_Trailer {
      """
      Signal indicating if trailer is connected or not.
      """
      connected: Boolean

   }

   """
   The current latitude and longitude of the vehicle.
   """
   type Vehicle_CurrentLocation {
      """
      GNSS Timestamp for latest position, formatted according to ISO 8601.
      """
      timestamp: String

      """
      Current latitude of vehicle.
      """
      latitude: double

      """
      Current longitude of vehicle.
      """
      longitude: double

      """
      Current magnetic compass heading.
      """
      heading: double

      """
      Accuracy level of the latitude and longitude coordinates.
      """
      accuracy: double

      """
      Current elevation of the position.
      """
      altitude: double

   }

   """
   Powertrain data for battery management, etc.
   """
   type Vehicle_Powertrain {
      """
      The accumulated energy from regenerative braking over lifetime.
      """
      accumulatedBrakingEnergy: Float

      """
      Remaining range in meters using all energy sources available in the vehicle.
      """
      range: Int

      """
      Engine-specific data, stopping at the bell housing.
      """
      combustionEngine: Vehicle_Powertrain_CombustionEngine

      """
      Transmission-specific data, stopping at the drive shafts.
      """
      transmission: Vehicle_Powertrain_Transmission

      """
      Electric Motor specific data.
      """
      electricMotor: Vehicle_Powertrain_ElectricMotor

      """
      Battery Management data.
      """
      tractionBattery: Vehicle_Powertrain_TractionBattery

      """
      Fuel system data.
      """
      fuelSystem: Vehicle_Powertrain_FuelSystem

   }

   """
   Engine-specific data, stopping at the bell housing.
   """
   type Vehicle_Powertrain_CombustionEngine {
      """
      Displacement in cubic centimetres.
      """
      displacement: Int

      """
      Stroke length in millimetres.
      """
      strokeLength: Float

      """
      Bore in millimetres.
      """
      bore: Float

      """
      Engine configuration.
      """
      configuration: String

      """
      Number of cylinders.
      """
      numberOfCylinders: Int

      """
      Number of valves per cylinder.
      """
      numberOfValvesPerCylinder: Int

      """
      Engine compression ratio, specified in the format 'X:1', e.g. '9.2:1'.
      """
      compressionRatio: String

      """
      Engine oil capacity in liters.
      """
      engineOilCapacity: Float

      """
      Engine coolant capacity in liters.
      """
      engineCoolantCapacity: Float

      """
      Peak power, in kilowatts, that engine can generate.
      """
      maxPower: Int

      """
      Peak torque, in newton meter, that the engine can generate.
      """
      maxTorque: Int

      """
      Type of aspiration (natural, turbocharger, supercharger etc).
      """
      aspirationType: String

      """
      Type of fuel that the engine runs on.
      """
      fuelType: String

      """
      Engine oil level.
      """
      engineOilLevel: String

      """
      Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.
      """
      oilLifeRemaining: Int

      """
      Engine Running. True if engine is rotating (Speed > 0).
      """
      isRunning: Boolean

      """
      Engine speed measured as rotations per minute.
      """
      speed: Int

      """
      Accumulated time during engine lifetime with 'engine speed (rpm) > 0'.
      """
      engineHours: Float

      """
      Accumulated idling time during engine lifetime. Definition of idling is not standardized.
      """
      idleHours: Float

      """
      Engine coolant temperature.
      """
      eCT: Int

      """
      Engine oil temperature.
      """
      eOT: Int

      """
      Manifold absolute pressure possibly boosted using forced induction.
      """
      mAP: Int

      """
      Grams of air drawn into engine per second.
      """
      mAF: Int

      """
      Current throttle position.
      """
      tPS: Int

      """
      Engine oil pressure.
      """
      eOP: Int

      """
      Current engine power output. Shall be reported as 0 during engine breaking.
      """
      power: Int

      """
      Current engine torque. Shall be reported as 0 during engine breaking.
      """
      torque: Int

      """
      Signals related to Diesel Exhaust Fluid (DEF). DEF is called AUS32 in ISO 22241.
      """
      dieselExhaustFluid: Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid

      """
      Diesel Particulate Filter signals.
      """
      dieselParticulateFilter: Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter

   }

   """
   Signals related to Diesel Exhaust Fluid (DEF). DEF is called AUS32 in ISO 22241.
   """
   type Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid {
      """
      Capacity in liters of the Diesel Exhaust Fluid Tank.
      """
      capacity: Float

      """
      Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.
      """
      level: Int

      """
      Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.
      """
      range: Int

      """
      Indicates if the Diesel Exhaust Fluid level is low. True if level is low. Definition of low is vehicle dependent.
      """
      isLevelLow: Boolean

   }

   """
   Diesel Particulate Filter signals.
   """
   type Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter {
      """
      Inlet temperature of Diesel Particulate Filter.
      """
      inletTemperature: Float

      """
      Outlet temperature of Diesel Particulate Filter.
      """
      outletTemperature: Float

      """
      Delta Pressure of Diesel Particulate Filter.
      """
      deltaPressure: Float

   }

   """
   Transmission-specific data, stopping at the drive shafts.
   """
   type Vehicle_Powertrain_Transmission {
      """
      Transmission type.
      """
      type: String

      """
      Number of forward gears in the transmission. -1 = CVT.
      """
      gearCount: Int

      """
      Drive type.
      """
      driveType: String

      """
      Odometer reading, total distance travelled during the lifetime of the transmission.
      """
      travelledDistance: Float

      """
      The current gear. 0=Neutral, 1/2/..=Forward, -1/..=Reverse
      """
      currentGear: Int

      """
      The selected gear. 0=Neutral, 1/2/..=Forward, -1/..=Reverse, 126=Park, 127=Drive
      """
      selectedGear: Int

      """
      Current gearbox performance mode.
      """
      performanceMode: String

      """
      Is the gearbox in automatic or manual (paddle) mode.
      """
      gearChangeMode: String

      """
      The current gearbox temperature
      """
      temperature: Int

      """
      Clutch wear as a percent. 0 = no wear. 100 = worn.
      """
      clutchWear: Int

   }

   """
   Electric Motor specific data.
   """
   type Vehicle_Powertrain_ElectricMotor {
      """
      Peak power, in kilowatts, that motor(s) can generate.
      """
      maxPower: Int

      """
      Peak power, in newton meter, that the motor(s) can generate.
      """
      maxTorque: Int

      """
      Peak regen/brake power, in kilowatts, that motor(s) can generate.
      """
      maxRegenPower: Int

      """
      Peak regen/brake torque, in newton meter, that the motor(s) can generate.
      """
      maxRegenTorque: Int

      """
      Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.
      """
      rpm: Int

      """
      Motor temperature.
      """
      temperature: Int

      """
      Motor coolant temperature (if applicable).
      """
      coolantTemperature: Int

      """
      Current motor power output. Negative values indicate regen mode.
      """
      power: Int

      """
      Current motor torque. Negative values indicate regen mode.
      """
      torque: Int

   }

   """
   Battery Management data.
   """
   type Vehicle_Powertrain_TractionBattery {
      """
      Indicating if the power (positive terminator) of the traction battery is connected to the powertrain.
      """
      isPowerConnected: Boolean

      """
      Indicating if the ground (negative terminator) of the traction battery is connected to the powertrain.
      """
      isGroundConnected: Boolean

      """
      Temperature of the battery pack.
      """
      temperature: Float

      """
      Information on the state of charge of the vehicle's high voltage battery.
      """
      stateOfCharge: Vehicle_Powertrain_TractionBattery_StateOfCharge

      """
      Gross capacity of the battery.
      """
      grossCapacity: Int

      """
      Net capacity of the battery.
      """
      netCapacity: Int

      """
      Nominal Voltage of the battery.
      """
      nominalVoltage: Int

      """
      Referent Voltage of the battery.
      """
      referentVoltage: Int

      """
      The accumulated energy delivered to the battery during charging over lifetime of the battery.
      """
      accumulatedChargedEnergy: Float

      """
      The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
      """
      accumulatedConsumedEnergy: Float

      """
      Remaining range in meters using only battery.
      """
      range: Int

      """
      Properties related to battery charging.
      """
      charging: Vehicle_Powertrain_TractionBattery_Charging

   }

   """
   Information on the state of charge of the vehicle's high voltage battery.
   """
   type Vehicle_Powertrain_TractionBattery_StateOfCharge {
      """
      Physical state of charge of the high voltage battery. This is not necessarily the state of charge being displayed to the customer.
      """
      current: Float

      """
      State of charge displayed to the customer.
      """
      displayed: Float

      """
      Target state of charge set (eg. by customer). Shall never exceed Charging.ChargeLimit.
      """
      target: Int

   }

   """
   Properties related to battery charging.
   """
   type Vehicle_Powertrain_TractionBattery_Charging {
      """
      Maximum charge level for battery, can potentially be set manually.
      """
      chargeLimit: Int

      """
      Maximum charging current that can be accepted by the system.
      """
      maximumChargingCurrent: Float

      """
      Status of the charge port cover, can potentially be controlled manually.
      """
      chargePortFlap: String

      """
      Indicates if a charging cable is connected to the vehicle or not.
      """
      isChargingCableConnected: Boolean

      """
      Type of charge plug available on the vehicle (CSS includes Type2).
      """
      chargePlugType: String

      """
      Control of the charge process - manually initiated (plug-in event, companion app, etc), timer-based or grid-controlled (eg ISO 15118).
      """
      mode: String

      """
      True if charging is ongoing. Charging is considered to be ongoing if energy is flowing from charger to vehicle.
      """
      isCharging: Boolean

      """
      Start or stop the charging process.
      """
      startStopCharging: String

      """
      Current charging current.
      """
      chargeCurrent: Float

      """
      Current charging voltage.
      """
      chargeVoltage: Float

      """
      Current charging rate, as in kilometers of range added per hour.
      """
      chargeRate: Float

      """
      The time needed for the current charging process to reach StateOfCharge.Target. 0 if charging is complete or no charging process is active or planned.
      """
      timeToComplete: Int

      """
      Properties related to timing of battery charging sessions.
      """
      timer: Vehicle_Powertrain_TractionBattery_Charging_Timer

   }

   """
   Properties related to timing of battery charging sessions.
   """
   type Vehicle_Powertrain_TractionBattery_Charging_Timer {
      """
      Defines timer mode for charging: 'inactive' - no timer set, charging may start as soon as battery is connected to a charger. 'starttime' - charging shall start at Charging.Timer.Time. 'endtime' - charging shall be finished (reach StateOfCharge.Target) at Charging.Timer.Time. When charging is completed the vehicle shall change mode to 'inactive' or set a new Charging.Timer.Time. Charging shall start immediately if mode is 'starttime' or 'endtime' and Charging.Timer.Time is a time in the past.
      """
      mode: String

      """
      Time for next charging-related action, formatted according to ISO 8601 with UTC time zone. Value has no significance if Charging.Timer.Mode is 'inactive'.
      """
      time: String

   }

   """
   Fuel system data.
   """
   type Vehicle_Powertrain_FuelSystem {
      """
      Defines the fuel type of the vehicle
      """
      fuelType: String

      """
      Defines the hybrid type of the vehicle
      """
      hybridType: String

      """
      Capacity of the fuel tank in liters
      """
      tankCapacity: Float

      """
      Level in fuel tank as percent of capacity. 0 = empty. 100 = full.
      """
      level: Int

      """
      Remaining range in meters using only liquid fuel.
      """
      range: Int

      """
      Current consumption in liters per 100 km.
      """
      instantConsumption: Float

      """
      Average consumption in liters per 100 km.
      """
      averageConsumption: Float

      """
      Fuel amount in liters consumed since start of current trip.
      """
      consumptionSinceStart: Float

      """
      Time in seconds elapsed since start of current trip.
      """
      timeSinceStart: Int

      """
      Indicates whether eco start stop is currently enabled
      """
      engineStopStartEnabled: Boolean

      """
      Indicates that the fuel level is low (e.g. <50km range)
      """
      lowFuelLevel: Boolean

   }

   """
   All body components.
   """
   type Vehicle_Body {
      """
      Body type code as defined by ISO 3779
      """
      bodyType: String

      """
      Location of the fuel cap or charge port
      """
      refuelPosition: String

      """
      Hood status
      """
      hood: Vehicle_Body_Hood

      """
      Trunk status
      """
      trunk: Vehicle_Body_Trunk

      """
      Horn signals
      """
      horn: Vehicle_Body_Horn

      """
      Rainsensor signals
      """
      raindetection: Vehicle_Body_Raindetection

      """
      Windshield signals
      """
      windshield: Vehicle_Body_Windshield

      """
      All lights
      """
      lights: Vehicle_Body_Lights

      """
      All mirrors
      """
      mirrors: Vehicle_Body_Mirrors

      """
      Collects Information about the charging port
      """
      chargingPort: Vehicle_Body_ChargingPort

   }

   """
   Hood status
   """
   type Vehicle_Body_Hood {
      """
      hood open or closed. True = Open. False = Closed
      """
      isOpen: Boolean

   }

   """
   Trunk status
   """
   type Vehicle_Body_Trunk {
      """
      Trunk open or closed. True = Open. False = Closed
      """
      isOpen: Boolean

      """
      Is trunk locked or unlocked. True = Locked. False = Unlocked.
      """
      isLocked: Boolean

   }

   """
   Horn signals
   """
   type Vehicle_Body_Horn {
      """
      Horn active or inactive. True = Active. False = Inactive.
      """
      isActive: Boolean

   }

   """
   Rainsensor signals
   """
   type Vehicle_Body_Raindetection {
      """
      Rain intensity. 0 = Dry, No Rain. 100 = Covered.
      """
      intensity: Int

   }

   """
   Windshield signals
   """
   type Vehicle_Body_Windshield {
      """
      Windshield signals
      """
      front: Vehicle_Body_Windshield_Front

      """
      Windshield signals
      """
      rear: Vehicle_Body_Windshield_Rear

   }

   """
   Windshield signals
   """
   type Vehicle_Body_Windshield_Front {
      """
      Windshield wiper signals
      """
      wiping: Vehicle_Body_Windshield_Front_Wiping

      """
      Windshield heater signals
      """
      heating: Vehicle_Body_Windshield_Front_Heating

      """
      Windshield washer fluid signals
      """
      washerFluid: Vehicle_Body_Windshield_Front_WasherFluid

   }

   """
   Windshield wiper signals
   """
   type Vehicle_Body_Windshield_Front_Wiping {
      """
      Wiper status
      """
      status: String

   }

   """
   Windshield heater signals
   """
   type Vehicle_Body_Windshield_Front_Heating {
      """
      Windshield heater status. 0 - off, 1 - on
      """
      status: Boolean

   }

   """
   Windshield washer fluid signals
   """
   type Vehicle_Body_Windshield_Front_WasherFluid {
      """
      Low level indication for washer fluid. True = Level Low. False = Level OK.
      """
      levelLow: Boolean

      """
      Washer fluid level as a percent. 0 = Empty. 100 = Full.
      """
      level: Int

   }

   """
   Windshield signals
   """
   type Vehicle_Body_Windshield_Rear {
      """
      Windshield wiper signals
      """
      wiping: Vehicle_Body_Windshield_Rear_Wiping

      """
      Windshield heater signals
      """
      heating: Vehicle_Body_Windshield_Rear_Heating

      """
      Windshield washer fluid signals
      """
      washerFluid: Vehicle_Body_Windshield_Rear_WasherFluid

   }

   """
   Windshield wiper signals
   """
   type Vehicle_Body_Windshield_Rear_Wiping {
      """
      Wiper status
      """
      status: String

   }

   """
   Windshield heater signals
   """
   type Vehicle_Body_Windshield_Rear_Heating {
      """
      Windshield heater status. 0 - off, 1 - on
      """
      status: Boolean

   }

   """
   Windshield washer fluid signals
   """
   type Vehicle_Body_Windshield_Rear_WasherFluid {
      """
      Low level indication for washer fluid. True = Level Low. False = Level OK.
      """
      levelLow: Boolean

      """
      Washer fluid level as a percent. 0 = Empty. 100 = Full.
      """
      level: Int

   }

   """
   All lights
   """
   type Vehicle_Body_Lights {
      """
      Is high beam on
      """
      isHighBeamOn: Boolean

      """
      Is low beam on
      """
      isLowBeamOn: Boolean

      """
      Are running lights on
      """
      isRunningOn: Boolean

      """
      Is backup (reverse) light on
      """
      isBackupOn: Boolean

      """
      Is parking light on
      """
      isParkingOn: Boolean

      """
      Is brake light on
      """
      isBrakeOn: Boolean

      """
      Is rear fog light on
      """
      isRearFogOn: Boolean

      """
      Is front fog light on
      """
      isFrontFogOn: Boolean

      """
      Are hazards on
      """
      isHazardOn: Boolean

      """
      Is left indicator flashing
      """
      isLeftIndicatorOn: Boolean

      """
      Is right indicator flashing
      """
      isRightIndicatorOn: Boolean

   }

   """
   All mirrors
   """
   type Vehicle_Body_Mirrors {
      """
      All mirrors
      """
      left: Vehicle_Body_Mirrors_Left

      """
      All mirrors
      """
      right: Vehicle_Body_Mirrors_Right

   }

   """
   All mirrors
   """
   type Vehicle_Body_Mirrors_Left {
      """
      Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
      """
      tilt: Int

      """
      Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
      """
      pan: Int

      """
      Mirror heater signals
      """
      heating: Vehicle_Body_Mirrors_Left_Heating

   }

   """
   Mirror heater signals
   """
   type Vehicle_Body_Mirrors_Left_Heating {
      """
      Mirror Heater on or off. True = Heater On. False = Heater Off.
      """
      status: Boolean

   }

   """
   All mirrors
   """
   type Vehicle_Body_Mirrors_Right {
      """
      Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
      """
      tilt: Int

      """
      Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
      """
      pan: Int

      """
      Mirror heater signals
      """
      heating: Vehicle_Body_Mirrors_Right_Heating

   }

   """
   Mirror heater signals
   """
   type Vehicle_Body_Mirrors_Right_Heating {
      """
      Mirror Heater on or off. True = Heater On. False = Heater Off.
      """
      status: Boolean

   }

   """
   Collects Information about the charging port
   """
   type Vehicle_Body_ChargingPort {
      """
      Indicates the primary charging type fitted to the vehicle
      """
      type: String

   }

   """
   All in-cabin components, including doors.
   """
   type Vehicle_Cabin {
      """
      Rear window shade.
      """
      rearShade: Vehicle_Cabin_RearShade

      """
      Climate control
      """
      hVAC: Vehicle_Cabin_HVAC

      """
      Infotainment system
      """
      infotainment: Vehicle_Cabin_Infotainment

      """
      Sun roof status.
      """
      sunroof: Vehicle_Cabin_Sunroof

      """
      Rearview mirror
      """
      rearviewMirror: Vehicle_Cabin_RearviewMirror

      """
      Interior lights signals and sensors
      """
      lights: Vehicle_Cabin_Lights

      """
      All doors, including windows and switches
      """
      door: Vehicle_Cabin_Door

      """
      Number of doors in vehicle
      """
      doorCount: Int

      """
      All seats.
      """
      seat: Vehicle_Cabin_Seat

      """
      The position of the driver seat in row 1.
      """
      driverPosition: Int

      """
      Number of seat rows in vehicle
      """
      seatRowCount: Int

      """
      Number of seats across each row from the front to the rear
      """
      seatPosCount: [Int]

      """
      Convertible roof
      """
      convertible: Vehicle_Cabin_Convertible

   }

   """
   Rear window shade.
   """
   type Vehicle_Cabin_RearShade {
      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

      """
      Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
      """
      position: Int

   }

   """
   Climate control
   """
   type Vehicle_Cabin_HVAC {
      """
      HVAC for single station in the vehicle
      """
      station: Vehicle_Cabin_HVAC_Station

      """
      Is recirculation active.
      """
      isRecirculationActive: Boolean

      """
      Is front defroster active.
      """
      isFrontDefrosterActive: Boolean

      """
      Is rear defroster active.
      """
      isRearDefrosterActive: Boolean

      """
      Is Air conditioning active.
      """
      isAirConditioningActive: Boolean

      """
      Ambient air temperature inside the vehicle.
      """
      ambientAirTemperature: Float

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station {
      """
      HVAC for single station in the vehicle
      """
      row1: Vehicle_Cabin_HVAC_Station_Row1

      """
      HVAC for single station in the vehicle
      """
      row2: Vehicle_Cabin_HVAC_Station_Row2

      """
      HVAC for single station in the vehicle
      """
      row3: Vehicle_Cabin_HVAC_Station_Row3

      """
      HVAC for single station in the vehicle
      """
      row4: Vehicle_Cabin_HVAC_Station_Row4

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row1 {
      """
      HVAC for single station in the vehicle
      """
      left: Vehicle_Cabin_HVAC_Station_Row1_Left

      """
      HVAC for single station in the vehicle
      """
      right: Vehicle_Cabin_HVAC_Station_Row1_Right

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row1_Left {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row1_Right {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row2 {
      """
      HVAC for single station in the vehicle
      """
      left: Vehicle_Cabin_HVAC_Station_Row2_Left

      """
      HVAC for single station in the vehicle
      """
      right: Vehicle_Cabin_HVAC_Station_Row2_Right

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row2_Left {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row2_Right {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row3 {
      """
      HVAC for single station in the vehicle
      """
      left: Vehicle_Cabin_HVAC_Station_Row3_Left

      """
      HVAC for single station in the vehicle
      """
      right: Vehicle_Cabin_HVAC_Station_Row3_Right

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row3_Left {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row3_Right {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row4 {
      """
      HVAC for single station in the vehicle
      """
      left: Vehicle_Cabin_HVAC_Station_Row4_Left

      """
      HVAC for single station in the vehicle
      """
      right: Vehicle_Cabin_HVAC_Station_Row4_Right

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row4_Left {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   HVAC for single station in the vehicle
   """
   type Vehicle_Cabin_HVAC_Station_Row4_Right {
      """
      Fan Speed, 0 = off. 100 = max
      """
      fanSpeed: Int

      """
      Temperature
      """
      temperature: Int

      """
      Direction of airstream
      """
      airDistribution: String

   }

   """
   Infotainment system
   """
   type Vehicle_Cabin_Infotainment {
      """
      All Media actions
      """
      media: Vehicle_Cabin_Infotainment_Media

      """
      All navigation actions
      """
      navigation: Vehicle_Cabin_Infotainment_Navigation

      """
      HMI related signals
      """
      hMI: Vehicle_Cabin_Infotainment_HMI

   }

   """
   All Media actions
   """
   type Vehicle_Cabin_Infotainment_Media {
      """
      Tells if the media was
      """
      action: String

      """
      Collection of signals updated in concert when a new media is played
      """
      played: Vehicle_Cabin_Infotainment_Media_Played

      """
      URI of suggested media that was declined
      """
      declinedURI: String

      """
      URI of suggested media that was selected
      """
      selectedURI: String

      """
      Current Media Volume
      """
      volume: Int

   }

   """
   Collection of signals updated in concert when a new media is played
   """
   type Vehicle_Cabin_Infotainment_Media_Played {
      """
      Media selected for playback
      """
      source: String

      """
      Name of artist being played
      """
      artist: String

      """
      Name of album being played
      """
      album: String

      """
      Name of track being played
      """
      track: String

      """
      User Resource associated with the media
      """
      uRI: String

   }

   """
   All navigation actions
   """
   type Vehicle_Cabin_Infotainment_Navigation {
      """
      A navigation has been selected.
      """
      destinationSet: Vehicle_Cabin_Infotainment_Navigation_DestinationSet

   }

   """
   A navigation has been selected.
   """
   type Vehicle_Cabin_Infotainment_Navigation_DestinationSet {
      """
      Latitude of destination
      """
      latitude: double

      """
      Longitude of destination
      """
      longitude: double

   }

   """
   HMI related signals
   """
   type Vehicle_Cabin_Infotainment_HMI {
      """
      ISO 639-1 standard language code for the current HMI
      """
      currentLanguage: String

      """
      Date format used in the current HMI
      """
      dateFormat: String

      """
      Time format used in the current HMI
      """
      timeFormat: String

      """
      Distance unit used in the current HMI
      """
      distanceUnit: String

      """
      Fuel economy unit used in the current HMI
      """
      fuelEconomyUnits: String

      """
      EV fuel economy unit used in the current HMI
      """
      eVEconomyUnits: String

      """
      Temperature unit used in the current HMI
      """
      temperatureUnit: String

      """
      Current display theme
      """
      dayNightMode: String

   }

   """
   Sun roof status.
   """
   type Vehicle_Cabin_Sunroof {
      """
      Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted
      """
      position: Int

      """
      Switch controlling sliding action such as window, sunroof, or shade.
      """
      switch: String

      """
      Sun roof shade status
      """
      shade: Vehicle_Cabin_Sunroof_Shade

   }

   """
   Sun roof shade status
   """
   type Vehicle_Cabin_Sunroof_Shade {
      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

      """
      Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
      """
      position: Int

   }

   """
   Rearview mirror
   """
   type Vehicle_Cabin_RearviewMirror {
      """
      Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed
      """
      dimmingLevel: Int

   }

   """
   Interior lights signals and sensors
   """
   type Vehicle_Cabin_Lights {
      """
      Is glove box light on
      """
      isGloveBoxOn: Boolean

      """
      Is trunk light light on
      """
      isTrunkOn: Boolean

      """
      Is central dome light light on
      """
      isDomeOn: Boolean

      """
      How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
      """
      ambientLight: Int

      """
      Intensity of the interior lights. 0 = Off. 100 = Full brightness.
      """
      lightIntensity: Int

      """
      Spotlight for a specific area in the vehicle.
      """
      spotlight: Vehicle_Cabin_Lights_Spotlight

   }

   """
   Spotlight for a specific area in the vehicle.
   """
   type Vehicle_Cabin_Lights_Spotlight {
      """
      Spotlight for a specific area in the vehicle.
      """
      row1: Vehicle_Cabin_Lights_Spotlight_Row1

      """
      Spotlight for a specific area in the vehicle.
      """
      row2: Vehicle_Cabin_Lights_Spotlight_Row2

      """
      Spotlight for a specific area in the vehicle.
      """
      row3: Vehicle_Cabin_Lights_Spotlight_Row3

      """
      Spotlight for a specific area in the vehicle.
      """
      row4: Vehicle_Cabin_Lights_Spotlight_Row4

   }

   """
   Spotlight for a specific area in the vehicle.
   """
   type Vehicle_Cabin_Lights_Spotlight_Row1 {
      """
      Is a shared light across a specific row on
      """
      isSharedOn: Boolean

      """
      Is light on the left side switched on
      """
      isLeftOn: Boolean

      """
      Is light on the right side switched on
      """
      isRightOn: Boolean

   }

   """
   Spotlight for a specific area in the vehicle.
   """
   type Vehicle_Cabin_Lights_Spotlight_Row2 {
      """
      Is a shared light across a specific row on
      """
      isSharedOn: Boolean

      """
      Is light on the left side switched on
      """
      isLeftOn: Boolean

      """
      Is light on the right side switched on
      """
      isRightOn: Boolean

   }

   """
   Spotlight for a specific area in the vehicle.
   """
   type Vehicle_Cabin_Lights_Spotlight_Row3 {
      """
      Is a shared light across a specific row on
      """
      isSharedOn: Boolean

      """
      Is light on the left side switched on
      """
      isLeftOn: Boolean

      """
      Is light on the right side switched on
      """
      isRightOn: Boolean

   }

   """
   Spotlight for a specific area in the vehicle.
   """
   type Vehicle_Cabin_Lights_Spotlight_Row4 {
      """
      Is a shared light across a specific row on
      """
      isSharedOn: Boolean

      """
      Is light on the left side switched on
      """
      isLeftOn: Boolean

      """
      Is light on the right side switched on
      """
      isRightOn: Boolean

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door {
      """
      All doors, including windows and switches
      """
      row1: Vehicle_Cabin_Door_Row1

      """
      All doors, including windows and switches
      """
      row2: Vehicle_Cabin_Door_Row2

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door_Row1 {
      """
      All doors, including windows and switches
      """
      left: Vehicle_Cabin_Door_Row1_Left

      """
      All doors, including windows and switches
      """
      right: Vehicle_Cabin_Door_Row1_Right

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door_Row1_Left {
      """
      Is door open or closed
      """
      isOpen: Boolean

      """
      Is door locked or unlocked. True = Locked. False = Unlocked.
      """
      isLocked: Boolean

      """
      Door window status
      """
      window: Vehicle_Cabin_Door_Row1_Left_Window

      """
      Is door child lock engaged. True = Engaged. False = Disengaged.
      """
      isChildLockActive: Boolean

      """
      Side window shade
      """
      shade: Vehicle_Cabin_Door_Row1_Left_Shade

   }

   """
   Door window status
   """
   type Vehicle_Cabin_Door_Row1_Left_Window {
      """
      Is window open or closed
      """
      isOpen: Boolean

      """
      Window position. 0 = Fully closed 100 = Fully opened.
      """
      position: Int

      """
      Is window child lock engaged. True = Engaged. False = Disengaged.
      """
      childLock: Boolean

      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

   }

   """
   Side window shade
   """
   type Vehicle_Cabin_Door_Row1_Left_Shade {
      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

      """
      Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
      """
      position: Int

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door_Row1_Right {
      """
      Is door open or closed
      """
      isOpen: Boolean

      """
      Is door locked or unlocked. True = Locked. False = Unlocked.
      """
      isLocked: Boolean

      """
      Door window status
      """
      window: Vehicle_Cabin_Door_Row1_Right_Window

      """
      Is door child lock engaged. True = Engaged. False = Disengaged.
      """
      isChildLockActive: Boolean

      """
      Side window shade
      """
      shade: Vehicle_Cabin_Door_Row1_Right_Shade

   }

   """
   Door window status
   """
   type Vehicle_Cabin_Door_Row1_Right_Window {
      """
      Is window open or closed
      """
      isOpen: Boolean

      """
      Window position. 0 = Fully closed 100 = Fully opened.
      """
      position: Int

      """
      Is window child lock engaged. True = Engaged. False = Disengaged.
      """
      childLock: Boolean

      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

   }

   """
   Side window shade
   """
   type Vehicle_Cabin_Door_Row1_Right_Shade {
      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

      """
      Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
      """
      position: Int

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door_Row2 {
      """
      All doors, including windows and switches
      """
      left: Vehicle_Cabin_Door_Row2_Left

      """
      All doors, including windows and switches
      """
      right: Vehicle_Cabin_Door_Row2_Right

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door_Row2_Left {
      """
      Is door open or closed
      """
      isOpen: Boolean

      """
      Is door locked or unlocked. True = Locked. False = Unlocked.
      """
      isLocked: Boolean

      """
      Door window status
      """
      window: Vehicle_Cabin_Door_Row2_Left_Window

      """
      Is door child lock engaged. True = Engaged. False = Disengaged.
      """
      isChildLockActive: Boolean

      """
      Side window shade
      """
      shade: Vehicle_Cabin_Door_Row2_Left_Shade

   }

   """
   Door window status
   """
   type Vehicle_Cabin_Door_Row2_Left_Window {
      """
      Is window open or closed
      """
      isOpen: Boolean

      """
      Window position. 0 = Fully closed 100 = Fully opened.
      """
      position: Int

      """
      Is window child lock engaged. True = Engaged. False = Disengaged.
      """
      childLock: Boolean

      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

   }

   """
   Side window shade
   """
   type Vehicle_Cabin_Door_Row2_Left_Shade {
      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

      """
      Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
      """
      position: Int

   }

   """
   All doors, including windows and switches
   """
   type Vehicle_Cabin_Door_Row2_Right {
      """
      Is door open or closed
      """
      isOpen: Boolean

      """
      Is door locked or unlocked. True = Locked. False = Unlocked.
      """
      isLocked: Boolean

      """
      Door window status
      """
      window: Vehicle_Cabin_Door_Row2_Right_Window

      """
      Is door child lock engaged. True = Engaged. False = Disengaged.
      """
      isChildLockActive: Boolean

      """
      Side window shade
      """
      shade: Vehicle_Cabin_Door_Row2_Right_Shade

   }

   """
   Door window status
   """
   type Vehicle_Cabin_Door_Row2_Right_Window {
      """
      Is window open or closed
      """
      isOpen: Boolean

      """
      Window position. 0 = Fully closed 100 = Fully opened.
      """
      position: Int

      """
      Is window child lock engaged. True = Engaged. False = Disengaged.
      """
      childLock: Boolean

      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

   }

   """
   Side window shade
   """
   type Vehicle_Cabin_Door_Row2_Right_Shade {
      """
      Switch controlling sliding action such as window, sunroof, or blind.
      """
      switch: String

      """
      Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
      """
      position: Int

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat {
      """
      All seats.
      """
      row1: Vehicle_Cabin_Seat_Row1

      """
      All seats.
      """
      row2: Vehicle_Cabin_Seat_Row2

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row1 {
      """
      All seats.
      """
      pos1: Vehicle_Cabin_Seat_Row1_Pos1

      """
      All seats.
      """
      pos2: Vehicle_Cabin_Seat_Row1_Pos2

      """
      All seats.
      """
      pos3: Vehicle_Cabin_Seat_Row1_Pos3

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row1_Pos1 {
      """
      Does the seat have a passenger in it.
      """
      hasPassenger: Boolean

      """
      Occupant data.
      """
      occupant: Vehicle_Cabin_Seat_Row1_Pos1_Occupant

      """
      Is the belt engaged.
      """
      isBelted: Boolean

      """
      Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
      """
      heating: Int

      """
      Seat massage level. 0 = off. 100 = max massage.
      """
      massage: Int

      """
      Recline level. -90 = Max forward recline. 90 max backward recline.
      """
      recline: Int

      """
      Seat horizontal position. 0 = Frontmost. 1000 = Rearmost.
      """
      position: Int

      """
      Seat vertical position. 0 = Lowermost. 1000 = Uppermost.
      """
      height: Int

      """
      Cushion (leg support) signals.
      """
      cushion: Vehicle_Cabin_Seat_Row1_Pos1_Cushion

      """
      Lumbar signals
      """
      lumbar: Vehicle_Cabin_Seat_Row1_Pos1_Lumbar

      """
      Side bolster settings
      """
      sideBolster: Vehicle_Cabin_Seat_Row1_Pos1_SideBolster

      """
      Head restraint settings
      """
      headRestraint: Vehicle_Cabin_Seat_Row1_Pos1_HeadRestraint

      """
      Airbag signals
      """
      airbag: Vehicle_Cabin_Seat_Row1_Pos1_Airbag

      """
      Seat switch signals
      """
      switch: Vehicle_Cabin_Seat_Row1_Pos1_Switch

   }

   """
   Occupant data.
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Occupant {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Cushion (leg support) signals.
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Cushion {
      """
      Height of the seat cushion (leg support), relative to seat. 0 = Lowermost. 500 = Uppermost.
      """
      height: Int

      """
      Forward length of cushion (leg support), relative to seat. 0 = Rearmost. 500 = Forwardmost.
      """
      length: Int

   }

   """
   Lumbar signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Lumbar {
      """
      Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

      """
      Lumbar support position. 0 = Lowermost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Side bolster settings
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_SideBolster {
      """
      Side bolster support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

   }

   """
   Head restraint settings
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_HeadRestraint {
      """
      Height of head restraint. 0 = Bottommost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Airbag signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Airbag {
      """
      Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
      """
      isDeployed: Boolean

   }

   """
   Seat switch signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch {
      """
      Warmer switch for Seat heater (SingleSeat.Heating)
      """
      warmer: Boolean

      """
      Cooler switch for Seat heater (SingleSeat.Heating)
      """
      cooler: Boolean

      """
      Seat forward switch engaged (SingleSeat.Position)
      """
      forward: Boolean

      """
      Seat backward switch engaged (SingleSeat.Position)
      """
      backward: Boolean

      """
      Seat up switch engaged (SingleSeat.Height)
      """
      up: Boolean

      """
      Seat down switch engaged (SingleSeat.Height)
      """
      down: Boolean

      """
      Switches for SingleSeat.HeadRestraint.Height
      """
      headRestraint: Vehicle_Cabin_Seat_Row1_Pos1_Switch_HeadRestraint

      """
      Switches for SingleSeat.Massage
      """
      massage: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage

      """
      Switches for SingleSeat.Recline
      """
      recline: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Recline

      """
      Switches for SingleSeat.Cushion
      """
      cushion: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Cushion

      """
      Switches for SingleSeat.Lumbar
      """
      lumbar: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Lumbar

      """
      Switches for SingleSeat.SideBolster
      """
      sideBolster: Vehicle_Cabin_Seat_Row1_Pos1_Switch_SideBolster

   }

   """
   Switches for SingleSeat.HeadRestraint.Height
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch_HeadRestraint {
      """
      Head restraint up switch engaged (SingleSeat.HeadRestraint.Height)
      """
      up: Boolean

      """
      Head restraint down switch engaged (SingleSeat.HeadRestraint.Height)
      """
      down: Boolean

   }

   """
   Switches for SingleSeat.Massage
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage {
      """
      Increase massage level switch engaged (SingleSeat.Massage)
      """
      increase: Boolean

      """
      Decrease massage level switch engaged (SingleSeat.Massage)
      """
      decrease: Boolean

   }

   """
   Switches for SingleSeat.Recline
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Recline {
      """
      Seatback recline backward switch engaged (SingleSeat.Recline)
      """
      backward: Boolean

      """
      Seatback recline forward switch engaged (SingleSeat.Recline)
      """
      forward: Boolean

   }

   """
   Switches for SingleSeat.Cushion
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Cushion {
      """
      Seat cushion up switch engaged (SingleSeat.Cushion.Height)
      """
      up: Boolean

      """
      Seat cushion down switch engaged (SingleSeat.Cushion.Height)
      """
      down: Boolean

      """
      Seat cushion forward/lengthen switch engaged (SingleSeat.Cushion.Length)
      """
      forward: Boolean

      """
      Seat cushion backward/shorten switch engaged (SingleSeat.Cushion.Length)
      """
      backward: Boolean

   }

   """
   Switches for SingleSeat.Lumbar
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Lumbar {
      """
      Lumbar up switch engaged (SingleSeat.Lumbar.Height)
      """
      up: Boolean

      """
      Lumbar down switch engaged (SingleSeat.Lumbar.Height)
      """
      down: Boolean

      """
      Lumbar inflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      inflate: Boolean

      """
      Lumbar deflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      deflate: Boolean

   }

   """
   Switches for SingleSeat.SideBolster
   """
   type Vehicle_Cabin_Seat_Row1_Pos1_Switch_SideBolster {
      """
      Side bolster inflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      inflate: Boolean

      """
      Side bolster deflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      deflate: Boolean

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row1_Pos2 {
      """
      Does the seat have a passenger in it.
      """
      hasPassenger: Boolean

      """
      Occupant data.
      """
      occupant: Vehicle_Cabin_Seat_Row1_Pos2_Occupant

      """
      Is the belt engaged.
      """
      isBelted: Boolean

      """
      Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
      """
      heating: Int

      """
      Seat massage level. 0 = off. 100 = max massage.
      """
      massage: Int

      """
      Recline level. -90 = Max forward recline. 90 max backward recline.
      """
      recline: Int

      """
      Seat horizontal position. 0 = Frontmost. 1000 = Rearmost.
      """
      position: Int

      """
      Seat vertical position. 0 = Lowermost. 1000 = Uppermost.
      """
      height: Int

      """
      Cushion (leg support) signals.
      """
      cushion: Vehicle_Cabin_Seat_Row1_Pos2_Cushion

      """
      Lumbar signals
      """
      lumbar: Vehicle_Cabin_Seat_Row1_Pos2_Lumbar

      """
      Side bolster settings
      """
      sideBolster: Vehicle_Cabin_Seat_Row1_Pos2_SideBolster

      """
      Head restraint settings
      """
      headRestraint: Vehicle_Cabin_Seat_Row1_Pos2_HeadRestraint

      """
      Airbag signals
      """
      airbag: Vehicle_Cabin_Seat_Row1_Pos2_Airbag

      """
      Seat switch signals
      """
      switch: Vehicle_Cabin_Seat_Row1_Pos2_Switch

   }

   """
   Occupant data.
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Occupant {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Cushion (leg support) signals.
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Cushion {
      """
      Height of the seat cushion (leg support), relative to seat. 0 = Lowermost. 500 = Uppermost.
      """
      height: Int

      """
      Forward length of cushion (leg support), relative to seat. 0 = Rearmost. 500 = Forwardmost.
      """
      length: Int

   }

   """
   Lumbar signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Lumbar {
      """
      Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

      """
      Lumbar support position. 0 = Lowermost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Side bolster settings
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_SideBolster {
      """
      Side bolster support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

   }

   """
   Head restraint settings
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_HeadRestraint {
      """
      Height of head restraint. 0 = Bottommost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Airbag signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Airbag {
      """
      Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
      """
      isDeployed: Boolean

   }

   """
   Seat switch signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch {
      """
      Warmer switch for Seat heater (SingleSeat.Heating)
      """
      warmer: Boolean

      """
      Cooler switch for Seat heater (SingleSeat.Heating)
      """
      cooler: Boolean

      """
      Seat forward switch engaged (SingleSeat.Position)
      """
      forward: Boolean

      """
      Seat backward switch engaged (SingleSeat.Position)
      """
      backward: Boolean

      """
      Seat up switch engaged (SingleSeat.Height)
      """
      up: Boolean

      """
      Seat down switch engaged (SingleSeat.Height)
      """
      down: Boolean

      """
      Switches for SingleSeat.HeadRestraint.Height
      """
      headRestraint: Vehicle_Cabin_Seat_Row1_Pos2_Switch_HeadRestraint

      """
      Switches for SingleSeat.Massage
      """
      massage: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage

      """
      Switches for SingleSeat.Recline
      """
      recline: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Recline

      """
      Switches for SingleSeat.Cushion
      """
      cushion: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Cushion

      """
      Switches for SingleSeat.Lumbar
      """
      lumbar: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Lumbar

      """
      Switches for SingleSeat.SideBolster
      """
      sideBolster: Vehicle_Cabin_Seat_Row1_Pos2_Switch_SideBolster

   }

   """
   Switches for SingleSeat.HeadRestraint.Height
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch_HeadRestraint {
      """
      Head restraint up switch engaged (SingleSeat.HeadRestraint.Height)
      """
      up: Boolean

      """
      Head restraint down switch engaged (SingleSeat.HeadRestraint.Height)
      """
      down: Boolean

   }

   """
   Switches for SingleSeat.Massage
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage {
      """
      Increase massage level switch engaged (SingleSeat.Massage)
      """
      increase: Boolean

      """
      Decrease massage level switch engaged (SingleSeat.Massage)
      """
      decrease: Boolean

   }

   """
   Switches for SingleSeat.Recline
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Recline {
      """
      Seatback recline backward switch engaged (SingleSeat.Recline)
      """
      backward: Boolean

      """
      Seatback recline forward switch engaged (SingleSeat.Recline)
      """
      forward: Boolean

   }

   """
   Switches for SingleSeat.Cushion
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Cushion {
      """
      Seat cushion up switch engaged (SingleSeat.Cushion.Height)
      """
      up: Boolean

      """
      Seat cushion down switch engaged (SingleSeat.Cushion.Height)
      """
      down: Boolean

      """
      Seat cushion forward/lengthen switch engaged (SingleSeat.Cushion.Length)
      """
      forward: Boolean

      """
      Seat cushion backward/shorten switch engaged (SingleSeat.Cushion.Length)
      """
      backward: Boolean

   }

   """
   Switches for SingleSeat.Lumbar
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Lumbar {
      """
      Lumbar up switch engaged (SingleSeat.Lumbar.Height)
      """
      up: Boolean

      """
      Lumbar down switch engaged (SingleSeat.Lumbar.Height)
      """
      down: Boolean

      """
      Lumbar inflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      inflate: Boolean

      """
      Lumbar deflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      deflate: Boolean

   }

   """
   Switches for SingleSeat.SideBolster
   """
   type Vehicle_Cabin_Seat_Row1_Pos2_Switch_SideBolster {
      """
      Side bolster inflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      inflate: Boolean

      """
      Side bolster deflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      deflate: Boolean

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row1_Pos3 {
      """
      Does the seat have a passenger in it.
      """
      hasPassenger: Boolean

      """
      Occupant data.
      """
      occupant: Vehicle_Cabin_Seat_Row1_Pos3_Occupant

      """
      Is the belt engaged.
      """
      isBelted: Boolean

      """
      Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
      """
      heating: Int

      """
      Seat massage level. 0 = off. 100 = max massage.
      """
      massage: Int

      """
      Recline level. -90 = Max forward recline. 90 max backward recline.
      """
      recline: Int

      """
      Seat horizontal position. 0 = Frontmost. 1000 = Rearmost.
      """
      position: Int

      """
      Seat vertical position. 0 = Lowermost. 1000 = Uppermost.
      """
      height: Int

      """
      Cushion (leg support) signals.
      """
      cushion: Vehicle_Cabin_Seat_Row1_Pos3_Cushion

      """
      Lumbar signals
      """
      lumbar: Vehicle_Cabin_Seat_Row1_Pos3_Lumbar

      """
      Side bolster settings
      """
      sideBolster: Vehicle_Cabin_Seat_Row1_Pos3_SideBolster

      """
      Head restraint settings
      """
      headRestraint: Vehicle_Cabin_Seat_Row1_Pos3_HeadRestraint

      """
      Airbag signals
      """
      airbag: Vehicle_Cabin_Seat_Row1_Pos3_Airbag

      """
      Seat switch signals
      """
      switch: Vehicle_Cabin_Seat_Row1_Pos3_Switch

   }

   """
   Occupant data.
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Occupant {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Cushion (leg support) signals.
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Cushion {
      """
      Height of the seat cushion (leg support), relative to seat. 0 = Lowermost. 500 = Uppermost.
      """
      height: Int

      """
      Forward length of cushion (leg support), relative to seat. 0 = Rearmost. 500 = Forwardmost.
      """
      length: Int

   }

   """
   Lumbar signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Lumbar {
      """
      Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

      """
      Lumbar support position. 0 = Lowermost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Side bolster settings
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_SideBolster {
      """
      Side bolster support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

   }

   """
   Head restraint settings
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_HeadRestraint {
      """
      Height of head restraint. 0 = Bottommost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Airbag signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Airbag {
      """
      Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
      """
      isDeployed: Boolean

   }

   """
   Seat switch signals
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch {
      """
      Warmer switch for Seat heater (SingleSeat.Heating)
      """
      warmer: Boolean

      """
      Cooler switch for Seat heater (SingleSeat.Heating)
      """
      cooler: Boolean

      """
      Seat forward switch engaged (SingleSeat.Position)
      """
      forward: Boolean

      """
      Seat backward switch engaged (SingleSeat.Position)
      """
      backward: Boolean

      """
      Seat up switch engaged (SingleSeat.Height)
      """
      up: Boolean

      """
      Seat down switch engaged (SingleSeat.Height)
      """
      down: Boolean

      """
      Switches for SingleSeat.HeadRestraint.Height
      """
      headRestraint: Vehicle_Cabin_Seat_Row1_Pos3_Switch_HeadRestraint

      """
      Switches for SingleSeat.Massage
      """
      massage: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage

      """
      Switches for SingleSeat.Recline
      """
      recline: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Recline

      """
      Switches for SingleSeat.Cushion
      """
      cushion: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Cushion

      """
      Switches for SingleSeat.Lumbar
      """
      lumbar: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Lumbar

      """
      Switches for SingleSeat.SideBolster
      """
      sideBolster: Vehicle_Cabin_Seat_Row1_Pos3_Switch_SideBolster

   }

   """
   Switches for SingleSeat.HeadRestraint.Height
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch_HeadRestraint {
      """
      Head restraint up switch engaged (SingleSeat.HeadRestraint.Height)
      """
      up: Boolean

      """
      Head restraint down switch engaged (SingleSeat.HeadRestraint.Height)
      """
      down: Boolean

   }

   """
   Switches for SingleSeat.Massage
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage {
      """
      Increase massage level switch engaged (SingleSeat.Massage)
      """
      increase: Boolean

      """
      Decrease massage level switch engaged (SingleSeat.Massage)
      """
      decrease: Boolean

   }

   """
   Switches for SingleSeat.Recline
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Recline {
      """
      Seatback recline backward switch engaged (SingleSeat.Recline)
      """
      backward: Boolean

      """
      Seatback recline forward switch engaged (SingleSeat.Recline)
      """
      forward: Boolean

   }

   """
   Switches for SingleSeat.Cushion
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Cushion {
      """
      Seat cushion up switch engaged (SingleSeat.Cushion.Height)
      """
      up: Boolean

      """
      Seat cushion down switch engaged (SingleSeat.Cushion.Height)
      """
      down: Boolean

      """
      Seat cushion forward/lengthen switch engaged (SingleSeat.Cushion.Length)
      """
      forward: Boolean

      """
      Seat cushion backward/shorten switch engaged (SingleSeat.Cushion.Length)
      """
      backward: Boolean

   }

   """
   Switches for SingleSeat.Lumbar
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Lumbar {
      """
      Lumbar up switch engaged (SingleSeat.Lumbar.Height)
      """
      up: Boolean

      """
      Lumbar down switch engaged (SingleSeat.Lumbar.Height)
      """
      down: Boolean

      """
      Lumbar inflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      inflate: Boolean

      """
      Lumbar deflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      deflate: Boolean

   }

   """
   Switches for SingleSeat.SideBolster
   """
   type Vehicle_Cabin_Seat_Row1_Pos3_Switch_SideBolster {
      """
      Side bolster inflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      inflate: Boolean

      """
      Side bolster deflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      deflate: Boolean

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row2 {
      """
      All seats.
      """
      pos1: Vehicle_Cabin_Seat_Row2_Pos1

      """
      All seats.
      """
      pos2: Vehicle_Cabin_Seat_Row2_Pos2

      """
      All seats.
      """
      pos3: Vehicle_Cabin_Seat_Row2_Pos3

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row2_Pos1 {
      """
      Does the seat have a passenger in it.
      """
      hasPassenger: Boolean

      """
      Occupant data.
      """
      occupant: Vehicle_Cabin_Seat_Row2_Pos1_Occupant

      """
      Is the belt engaged.
      """
      isBelted: Boolean

      """
      Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
      """
      heating: Int

      """
      Seat massage level. 0 = off. 100 = max massage.
      """
      massage: Int

      """
      Recline level. -90 = Max forward recline. 90 max backward recline.
      """
      recline: Int

      """
      Seat horizontal position. 0 = Frontmost. 1000 = Rearmost.
      """
      position: Int

      """
      Seat vertical position. 0 = Lowermost. 1000 = Uppermost.
      """
      height: Int

      """
      Cushion (leg support) signals.
      """
      cushion: Vehicle_Cabin_Seat_Row2_Pos1_Cushion

      """
      Lumbar signals
      """
      lumbar: Vehicle_Cabin_Seat_Row2_Pos1_Lumbar

      """
      Side bolster settings
      """
      sideBolster: Vehicle_Cabin_Seat_Row2_Pos1_SideBolster

      """
      Head restraint settings
      """
      headRestraint: Vehicle_Cabin_Seat_Row2_Pos1_HeadRestraint

      """
      Airbag signals
      """
      airbag: Vehicle_Cabin_Seat_Row2_Pos1_Airbag

      """
      Seat switch signals
      """
      switch: Vehicle_Cabin_Seat_Row2_Pos1_Switch

   }

   """
   Occupant data.
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Occupant {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Cushion (leg support) signals.
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Cushion {
      """
      Height of the seat cushion (leg support), relative to seat. 0 = Lowermost. 500 = Uppermost.
      """
      height: Int

      """
      Forward length of cushion (leg support), relative to seat. 0 = Rearmost. 500 = Forwardmost.
      """
      length: Int

   }

   """
   Lumbar signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Lumbar {
      """
      Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

      """
      Lumbar support position. 0 = Lowermost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Side bolster settings
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_SideBolster {
      """
      Side bolster support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

   }

   """
   Head restraint settings
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_HeadRestraint {
      """
      Height of head restraint. 0 = Bottommost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Airbag signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Airbag {
      """
      Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
      """
      isDeployed: Boolean

   }

   """
   Seat switch signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch {
      """
      Warmer switch for Seat heater (SingleSeat.Heating)
      """
      warmer: Boolean

      """
      Cooler switch for Seat heater (SingleSeat.Heating)
      """
      cooler: Boolean

      """
      Seat forward switch engaged (SingleSeat.Position)
      """
      forward: Boolean

      """
      Seat backward switch engaged (SingleSeat.Position)
      """
      backward: Boolean

      """
      Seat up switch engaged (SingleSeat.Height)
      """
      up: Boolean

      """
      Seat down switch engaged (SingleSeat.Height)
      """
      down: Boolean

      """
      Switches for SingleSeat.HeadRestraint.Height
      """
      headRestraint: Vehicle_Cabin_Seat_Row2_Pos1_Switch_HeadRestraint

      """
      Switches for SingleSeat.Massage
      """
      massage: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage

      """
      Switches for SingleSeat.Recline
      """
      recline: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Recline

      """
      Switches for SingleSeat.Cushion
      """
      cushion: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Cushion

      """
      Switches for SingleSeat.Lumbar
      """
      lumbar: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Lumbar

      """
      Switches for SingleSeat.SideBolster
      """
      sideBolster: Vehicle_Cabin_Seat_Row2_Pos1_Switch_SideBolster

   }

   """
   Switches for SingleSeat.HeadRestraint.Height
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch_HeadRestraint {
      """
      Head restraint up switch engaged (SingleSeat.HeadRestraint.Height)
      """
      up: Boolean

      """
      Head restraint down switch engaged (SingleSeat.HeadRestraint.Height)
      """
      down: Boolean

   }

   """
   Switches for SingleSeat.Massage
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage {
      """
      Increase massage level switch engaged (SingleSeat.Massage)
      """
      increase: Boolean

      """
      Decrease massage level switch engaged (SingleSeat.Massage)
      """
      decrease: Boolean

   }

   """
   Switches for SingleSeat.Recline
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Recline {
      """
      Seatback recline backward switch engaged (SingleSeat.Recline)
      """
      backward: Boolean

      """
      Seatback recline forward switch engaged (SingleSeat.Recline)
      """
      forward: Boolean

   }

   """
   Switches for SingleSeat.Cushion
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Cushion {
      """
      Seat cushion up switch engaged (SingleSeat.Cushion.Height)
      """
      up: Boolean

      """
      Seat cushion down switch engaged (SingleSeat.Cushion.Height)
      """
      down: Boolean

      """
      Seat cushion forward/lengthen switch engaged (SingleSeat.Cushion.Length)
      """
      forward: Boolean

      """
      Seat cushion backward/shorten switch engaged (SingleSeat.Cushion.Length)
      """
      backward: Boolean

   }

   """
   Switches for SingleSeat.Lumbar
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Lumbar {
      """
      Lumbar up switch engaged (SingleSeat.Lumbar.Height)
      """
      up: Boolean

      """
      Lumbar down switch engaged (SingleSeat.Lumbar.Height)
      """
      down: Boolean

      """
      Lumbar inflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      inflate: Boolean

      """
      Lumbar deflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      deflate: Boolean

   }

   """
   Switches for SingleSeat.SideBolster
   """
   type Vehicle_Cabin_Seat_Row2_Pos1_Switch_SideBolster {
      """
      Side bolster inflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      inflate: Boolean

      """
      Side bolster deflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      deflate: Boolean

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row2_Pos2 {
      """
      Does the seat have a passenger in it.
      """
      hasPassenger: Boolean

      """
      Occupant data.
      """
      occupant: Vehicle_Cabin_Seat_Row2_Pos2_Occupant

      """
      Is the belt engaged.
      """
      isBelted: Boolean

      """
      Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
      """
      heating: Int

      """
      Seat massage level. 0 = off. 100 = max massage.
      """
      massage: Int

      """
      Recline level. -90 = Max forward recline. 90 max backward recline.
      """
      recline: Int

      """
      Seat horizontal position. 0 = Frontmost. 1000 = Rearmost.
      """
      position: Int

      """
      Seat vertical position. 0 = Lowermost. 1000 = Uppermost.
      """
      height: Int

      """
      Cushion (leg support) signals.
      """
      cushion: Vehicle_Cabin_Seat_Row2_Pos2_Cushion

      """
      Lumbar signals
      """
      lumbar: Vehicle_Cabin_Seat_Row2_Pos2_Lumbar

      """
      Side bolster settings
      """
      sideBolster: Vehicle_Cabin_Seat_Row2_Pos2_SideBolster

      """
      Head restraint settings
      """
      headRestraint: Vehicle_Cabin_Seat_Row2_Pos2_HeadRestraint

      """
      Airbag signals
      """
      airbag: Vehicle_Cabin_Seat_Row2_Pos2_Airbag

      """
      Seat switch signals
      """
      switch: Vehicle_Cabin_Seat_Row2_Pos2_Switch

   }

   """
   Occupant data.
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Occupant {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Cushion (leg support) signals.
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Cushion {
      """
      Height of the seat cushion (leg support), relative to seat. 0 = Lowermost. 500 = Uppermost.
      """
      height: Int

      """
      Forward length of cushion (leg support), relative to seat. 0 = Rearmost. 500 = Forwardmost.
      """
      length: Int

   }

   """
   Lumbar signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Lumbar {
      """
      Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

      """
      Lumbar support position. 0 = Lowermost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Side bolster settings
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_SideBolster {
      """
      Side bolster support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

   }

   """
   Head restraint settings
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_HeadRestraint {
      """
      Height of head restraint. 0 = Bottommost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Airbag signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Airbag {
      """
      Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
      """
      isDeployed: Boolean

   }

   """
   Seat switch signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch {
      """
      Warmer switch for Seat heater (SingleSeat.Heating)
      """
      warmer: Boolean

      """
      Cooler switch for Seat heater (SingleSeat.Heating)
      """
      cooler: Boolean

      """
      Seat forward switch engaged (SingleSeat.Position)
      """
      forward: Boolean

      """
      Seat backward switch engaged (SingleSeat.Position)
      """
      backward: Boolean

      """
      Seat up switch engaged (SingleSeat.Height)
      """
      up: Boolean

      """
      Seat down switch engaged (SingleSeat.Height)
      """
      down: Boolean

      """
      Switches for SingleSeat.HeadRestraint.Height
      """
      headRestraint: Vehicle_Cabin_Seat_Row2_Pos2_Switch_HeadRestraint

      """
      Switches for SingleSeat.Massage
      """
      massage: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage

      """
      Switches for SingleSeat.Recline
      """
      recline: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Recline

      """
      Switches for SingleSeat.Cushion
      """
      cushion: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Cushion

      """
      Switches for SingleSeat.Lumbar
      """
      lumbar: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Lumbar

      """
      Switches for SingleSeat.SideBolster
      """
      sideBolster: Vehicle_Cabin_Seat_Row2_Pos2_Switch_SideBolster

   }

   """
   Switches for SingleSeat.HeadRestraint.Height
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch_HeadRestraint {
      """
      Head restraint up switch engaged (SingleSeat.HeadRestraint.Height)
      """
      up: Boolean

      """
      Head restraint down switch engaged (SingleSeat.HeadRestraint.Height)
      """
      down: Boolean

   }

   """
   Switches for SingleSeat.Massage
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage {
      """
      Increase massage level switch engaged (SingleSeat.Massage)
      """
      increase: Boolean

      """
      Decrease massage level switch engaged (SingleSeat.Massage)
      """
      decrease: Boolean

   }

   """
   Switches for SingleSeat.Recline
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Recline {
      """
      Seatback recline backward switch engaged (SingleSeat.Recline)
      """
      backward: Boolean

      """
      Seatback recline forward switch engaged (SingleSeat.Recline)
      """
      forward: Boolean

   }

   """
   Switches for SingleSeat.Cushion
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Cushion {
      """
      Seat cushion up switch engaged (SingleSeat.Cushion.Height)
      """
      up: Boolean

      """
      Seat cushion down switch engaged (SingleSeat.Cushion.Height)
      """
      down: Boolean

      """
      Seat cushion forward/lengthen switch engaged (SingleSeat.Cushion.Length)
      """
      forward: Boolean

      """
      Seat cushion backward/shorten switch engaged (SingleSeat.Cushion.Length)
      """
      backward: Boolean

   }

   """
   Switches for SingleSeat.Lumbar
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Lumbar {
      """
      Lumbar up switch engaged (SingleSeat.Lumbar.Height)
      """
      up: Boolean

      """
      Lumbar down switch engaged (SingleSeat.Lumbar.Height)
      """
      down: Boolean

      """
      Lumbar inflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      inflate: Boolean

      """
      Lumbar deflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      deflate: Boolean

   }

   """
   Switches for SingleSeat.SideBolster
   """
   type Vehicle_Cabin_Seat_Row2_Pos2_Switch_SideBolster {
      """
      Side bolster inflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      inflate: Boolean

      """
      Side bolster deflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      deflate: Boolean

   }

   """
   All seats.
   """
   type Vehicle_Cabin_Seat_Row2_Pos3 {
      """
      Does the seat have a passenger in it.
      """
      hasPassenger: Boolean

      """
      Occupant data.
      """
      occupant: Vehicle_Cabin_Seat_Row2_Pos3_Occupant

      """
      Is the belt engaged.
      """
      isBelted: Boolean

      """
      Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
      """
      heating: Int

      """
      Seat massage level. 0 = off. 100 = max massage.
      """
      massage: Int

      """
      Recline level. -90 = Max forward recline. 90 max backward recline.
      """
      recline: Int

      """
      Seat horizontal position. 0 = Frontmost. 1000 = Rearmost.
      """
      position: Int

      """
      Seat vertical position. 0 = Lowermost. 1000 = Uppermost.
      """
      height: Int

      """
      Cushion (leg support) signals.
      """
      cushion: Vehicle_Cabin_Seat_Row2_Pos3_Cushion

      """
      Lumbar signals
      """
      lumbar: Vehicle_Cabin_Seat_Row2_Pos3_Lumbar

      """
      Side bolster settings
      """
      sideBolster: Vehicle_Cabin_Seat_Row2_Pos3_SideBolster

      """
      Head restraint settings
      """
      headRestraint: Vehicle_Cabin_Seat_Row2_Pos3_HeadRestraint

      """
      Airbag signals
      """
      airbag: Vehicle_Cabin_Seat_Row2_Pos3_Airbag

      """
      Seat switch signals
      """
      switch: Vehicle_Cabin_Seat_Row2_Pos3_Switch

   }

   """
   Occupant data.
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Occupant {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Cushion (leg support) signals.
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Cushion {
      """
      Height of the seat cushion (leg support), relative to seat. 0 = Lowermost. 500 = Uppermost.
      """
      height: Int

      """
      Forward length of cushion (leg support), relative to seat. 0 = Rearmost. 500 = Forwardmost.
      """
      length: Int

   }

   """
   Lumbar signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Lumbar {
      """
      Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

      """
      Lumbar support position. 0 = Lowermost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Side bolster settings
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_SideBolster {
      """
      Side bolster support inflation. 0 = Fully deflated. 255 = Fully inflated.
      """
      inflation: Int

   }

   """
   Head restraint settings
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_HeadRestraint {
      """
      Height of head restraint. 0 = Bottommost. 255 = Uppermost.
      """
      height: Int

   }

   """
   Airbag signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Airbag {
      """
      Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
      """
      isDeployed: Boolean

   }

   """
   Seat switch signals
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch {
      """
      Warmer switch for Seat heater (SingleSeat.Heating)
      """
      warmer: Boolean

      """
      Cooler switch for Seat heater (SingleSeat.Heating)
      """
      cooler: Boolean

      """
      Seat forward switch engaged (SingleSeat.Position)
      """
      forward: Boolean

      """
      Seat backward switch engaged (SingleSeat.Position)
      """
      backward: Boolean

      """
      Seat up switch engaged (SingleSeat.Height)
      """
      up: Boolean

      """
      Seat down switch engaged (SingleSeat.Height)
      """
      down: Boolean

      """
      Switches for SingleSeat.HeadRestraint.Height
      """
      headRestraint: Vehicle_Cabin_Seat_Row2_Pos3_Switch_HeadRestraint

      """
      Switches for SingleSeat.Massage
      """
      massage: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage

      """
      Switches for SingleSeat.Recline
      """
      recline: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Recline

      """
      Switches for SingleSeat.Cushion
      """
      cushion: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Cushion

      """
      Switches for SingleSeat.Lumbar
      """
      lumbar: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Lumbar

      """
      Switches for SingleSeat.SideBolster
      """
      sideBolster: Vehicle_Cabin_Seat_Row2_Pos3_Switch_SideBolster

   }

   """
   Switches for SingleSeat.HeadRestraint.Height
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch_HeadRestraint {
      """
      Head restraint up switch engaged (SingleSeat.HeadRestraint.Height)
      """
      up: Boolean

      """
      Head restraint down switch engaged (SingleSeat.HeadRestraint.Height)
      """
      down: Boolean

   }

   """
   Switches for SingleSeat.Massage
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage {
      """
      Increase massage level switch engaged (SingleSeat.Massage)
      """
      increase: Boolean

      """
      Decrease massage level switch engaged (SingleSeat.Massage)
      """
      decrease: Boolean

   }

   """
   Switches for SingleSeat.Recline
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Recline {
      """
      Seatback recline backward switch engaged (SingleSeat.Recline)
      """
      backward: Boolean

      """
      Seatback recline forward switch engaged (SingleSeat.Recline)
      """
      forward: Boolean

   }

   """
   Switches for SingleSeat.Cushion
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Cushion {
      """
      Seat cushion up switch engaged (SingleSeat.Cushion.Height)
      """
      up: Boolean

      """
      Seat cushion down switch engaged (SingleSeat.Cushion.Height)
      """
      down: Boolean

      """
      Seat cushion forward/lengthen switch engaged (SingleSeat.Cushion.Length)
      """
      forward: Boolean

      """
      Seat cushion backward/shorten switch engaged (SingleSeat.Cushion.Length)
      """
      backward: Boolean

   }

   """
   Switches for SingleSeat.Lumbar
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Lumbar {
      """
      Lumbar up switch engaged (SingleSeat.Lumbar.Height)
      """
      up: Boolean

      """
      Lumbar down switch engaged (SingleSeat.Lumbar.Height)
      """
      down: Boolean

      """
      Lumbar inflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      inflate: Boolean

      """
      Lumbar deflation switch engaged (SingleSeat.Lumbar.Inflation)
      """
      deflate: Boolean

   }

   """
   Switches for SingleSeat.SideBolster
   """
   type Vehicle_Cabin_Seat_Row2_Pos3_Switch_SideBolster {
      """
      Side bolster inflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      inflate: Boolean

      """
      Side bolster deflation switch engaged (SingleSeat.SideBolster.Inflation)
      """
      deflate: Boolean

   }

   """
   Convertible roof
   """
   type Vehicle_Cabin_Convertible {
      """
      Roof status on convertible vehicles
      """
      status: String

   }

   """
   All Advanced Driver Assist Systems data.
   """
   type Vehicle_ADAS {
      """
      Signals from Cruise Control system
      """
      cruiseControl: Vehicle_ADAS_CruiseControl

      """
      Signals from Land Departure Detection System
      """
      laneDepartureDetection: Vehicle_ADAS_LaneDepartureDetection

      """
      Signals form Obstacle Sensor System
      """
      obstacleDetection: Vehicle_ADAS_ObstacleDetection

      """
      Antilock Braking System signals
      """
      aBS: Vehicle_ADAS_ABS

      """
      Traction Control System signals
      """
      tCS: Vehicle_ADAS_TCS

      """
      Electronic Stability Control System signals
      """
      eSC: Vehicle_ADAS_ESC

   }

   """
   Signals from Cruise Control system
   """
   type Vehicle_ADAS_CruiseControl {
      """
      Indicates if cruise control system is enabled. True = Enabled. False = Disabled.
      """
      isActive: Boolean

      """
      Set cruise control speed in kilometers per hour
      """
      speedSet: Float

      """
      Indicates if cruise control system incurred and error condition. True = Error. False = NoError.
      """
      error: Boolean

   }

   """
   Signals from Land Departure Detection System
   """
   type Vehicle_ADAS_LaneDepartureDetection {
      """
      Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.
      """
      isActive: Boolean

      """
      Indicates if lane departure detection registered a lane departure
      """
      warning: Boolean

      """
      Indicates if lane departure system incurred an error condition. True = Error. False = No Error.
      """
      error: Boolean

   }

   """
   Signals form Obstacle Sensor System
   """
   type Vehicle_ADAS_ObstacleDetection {
      """
      Indicates if obstacle sensor system is enabled. True = Enabled. False = Disabled.
      """
      isActive: Boolean

      """
      Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.
      """
      error: Boolean

   }

   """
   Antilock Braking System signals
   """
   type Vehicle_ADAS_ABS {
      """
      Indicates if ABS is enabled. True = Enabled. False = Disabled.
      """
      isActive: Boolean

      """
      Indicates if ABS incurred an error condition. True = Error. False = No Error.
      """
      error: Boolean

      """
      Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.
      """
      isEngaged: Boolean

   }

   """
   Traction Control System signals
   """
   type Vehicle_ADAS_TCS {
      """
      Indicates if TCS is enabled. True = Enabled. False = Disabled.
      """
      isActive: Boolean

      """
      Indicates if TCS incurred an error condition. True = Error. False = No Error.
      """
      error: Boolean

      """
      Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.
      """
      isEngaged: Boolean

   }

   """
   Electronic Stability Control System signals
   """
   type Vehicle_ADAS_ESC {
      """
      Indicates if ECS is enabled. True = Enabled. False = Disabled.
      """
      isActive: Boolean

      """
      Indicates if ESC incurred an error condition. True = Error. False = No Error.
      """
      error: Boolean

      """
      Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.
      """
      isEngaged: Boolean

   }

   """
   All data concerning steering, suspension, wheels, and brakes.
   """
   type Vehicle_Chassis {
      """
      Overall wheel base, in mm.
      """
      wheelbase: Int

      """
      Overall wheel tracking, in mm.
      """
      track: Int

      """
      Axle signals
      """
      axle: Vehicle_Chassis_Axle

      """
      Number of axles on the vehicle
      """
      axleCount: Int

      """
      Parking brake signals
      """
      parkingBrake: Vehicle_Chassis_ParkingBrake

      """
      Steering wheel signals
      """
      steeringWheel: Vehicle_Chassis_SteeringWheel

      """
      Accelerator signals
      """
      accelerator: Vehicle_Chassis_Accelerator

      """
      Brake system signals
      """
      brake: Vehicle_Chassis_Brake

   }

   """
   Axle signals
   """
   type Vehicle_Chassis_Axle {
      """
      Axle signals
      """
      row1: Vehicle_Chassis_Axle_Row1

      """
      Axle signals
      """
      row2: Vehicle_Chassis_Axle_Row2

   }

   """
   Axle signals
   """
   type Vehicle_Chassis_Axle_Row1 {
      """
      Number of wheels on the axle
      """
      wheelCount: Int

      """
      Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
      """
      wheelDiameter: Float

      """
      Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
      """
      wheelWidth: Float

      """
      Outer diameter of tires, in inches, as per ETRTO / TRA standard.
      """
      tireDiameter: Float

      """
      Nominal section width of tires, in mm, as per ETRTO / TRA standard.
      """
      tireWidth: Int

      """
      Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
      """
      tireAspectRatio: Int

      """
      Wheel signals for axle
      """
      wheel: Vehicle_Chassis_Axle_Row1_Wheel

   }

   """
   Wheel signals for axle
   """
   type Vehicle_Chassis_Axle_Row1_Wheel {
      """
      Wheel signals for axle
      """
      left: Vehicle_Chassis_Axle_Row1_Wheel_Left

      """
      Wheel signals for axle
      """
      right: Vehicle_Chassis_Axle_Row1_Wheel_Right

   }

   """
   Wheel signals for axle
   """
   type Vehicle_Chassis_Axle_Row1_Wheel_Left {
      """
      Brake signals for wheel
      """
      brake: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake

      """
      Tire signals for wheel
      """
      tire: Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire

   }

   """
   Brake signals for wheel
   """
   type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake {
      """
      Brake fluid level as percent. 0 = Empty. 100 = Full.
      """
      fluidLevel: Int

      """
      Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
      """
      fluidLevelLow: Boolean

      """
      Brake pad wear as percent. 0 = No Wear. 100 = Worn.
      """
      padWear: Int

      """
      Brake pad wear status. True = Worn. False = Not Worn.
      """
      brakesWorn: Boolean

   }

   """
   Tire signals for wheel
   """
   type Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire {
      """
      Tire pressure in kilo-Pascal
      """
      pressure: Int

      """
      Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
      """
      pressureLow: Boolean

      """
      Tire temperature in Celsius.
      """
      temperature: Float

   }

   """
   Wheel signals for axle
   """
   type Vehicle_Chassis_Axle_Row1_Wheel_Right {
      """
      Brake signals for wheel
      """
      brake: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake

      """
      Tire signals for wheel
      """
      tire: Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire

   }

   """
   Brake signals for wheel
   """
   type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake {
      """
      Brake fluid level as percent. 0 = Empty. 100 = Full.
      """
      fluidLevel: Int

      """
      Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
      """
      fluidLevelLow: Boolean

      """
      Brake pad wear as percent. 0 = No Wear. 100 = Worn.
      """
      padWear: Int

      """
      Brake pad wear status. True = Worn. False = Not Worn.
      """
      brakesWorn: Boolean

   }

   """
   Tire signals for wheel
   """
   type Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire {
      """
      Tire pressure in kilo-Pascal
      """
      pressure: Int

      """
      Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
      """
      pressureLow: Boolean

      """
      Tire temperature in Celsius.
      """
      temperature: Float

   }

   """
   Axle signals
   """
   type Vehicle_Chassis_Axle_Row2 {
      """
      Number of wheels on the axle
      """
      wheelCount: Int

      """
      Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
      """
      wheelDiameter: Float

      """
      Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
      """
      wheelWidth: Float

      """
      Outer diameter of tires, in inches, as per ETRTO / TRA standard.
      """
      tireDiameter: Float

      """
      Nominal section width of tires, in mm, as per ETRTO / TRA standard.
      """
      tireWidth: Int

      """
      Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
      """
      tireAspectRatio: Int

      """
      Wheel signals for axle
      """
      wheel: Vehicle_Chassis_Axle_Row2_Wheel

   }

   """
   Wheel signals for axle
   """
   type Vehicle_Chassis_Axle_Row2_Wheel {
      """
      Wheel signals for axle
      """
      left: Vehicle_Chassis_Axle_Row2_Wheel_Left

      """
      Wheel signals for axle
      """
      right: Vehicle_Chassis_Axle_Row2_Wheel_Right

   }

   """
   Wheel signals for axle
   """
   type Vehicle_Chassis_Axle_Row2_Wheel_Left {
      """
      Brake signals for wheel
      """
      brake: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake

      """
      Tire signals for wheel
      """
      tire: Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire

   }

   """
   Brake signals for wheel
   """
   type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake {
      """
      Brake fluid level as percent. 0 = Empty. 100 = Full.
      """
      fluidLevel: Int

      """
      Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
      """
      fluidLevelLow: Boolean

      """
      Brake pad wear as percent. 0 = No Wear. 100 = Worn.
      """
      padWear: Int

      """
      Brake pad wear status. True = Worn. False = Not Worn.
      """
      brakesWorn: Boolean

   }

   """
   Tire signals for wheel
   """
   type Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire {
      """
      Tire pressure in kilo-Pascal
      """
      pressure: Int

      """
      Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
      """
      pressureLow: Boolean

      """
      Tire temperature in Celsius.
      """
      temperature: Float

   }

   """
   Wheel signals for axle
   """
   type Vehicle_Chassis_Axle_Row2_Wheel_Right {
      """
      Brake signals for wheel
      """
      brake: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake

      """
      Tire signals for wheel
      """
      tire: Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire

   }

   """
   Brake signals for wheel
   """
   type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake {
      """
      Brake fluid level as percent. 0 = Empty. 100 = Full.
      """
      fluidLevel: Int

      """
      Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
      """
      fluidLevelLow: Boolean

      """
      Brake pad wear as percent. 0 = No Wear. 100 = Worn.
      """
      padWear: Int

      """
      Brake pad wear status. True = Worn. False = Not Worn.
      """
      brakesWorn: Boolean

   }

   """
   Tire signals for wheel
   """
   type Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire {
      """
      Tire pressure in kilo-Pascal
      """
      pressure: Int

      """
      Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
      """
      pressureLow: Boolean

      """
      Tire temperature in Celsius.
      """
      temperature: Float

   }

   """
   Parking brake signals
   """
   type Vehicle_Chassis_ParkingBrake {
      """
      Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.
      """
      isEngaged: Boolean

   }

   """
   Steering wheel signals
   """
   type Vehicle_Chassis_SteeringWheel {
      """
      Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
      """
      angle: Int

      """
      Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
      """
      tilt: Int

      """
      Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
      """
      extension: Int

      """
      Position of the steering wheel on the left or right side of the vehicle.
      """
      position: String

   }

   """
   Accelerator signals
   """
   type Vehicle_Chassis_Accelerator {
      """
      Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
      """
      pedalPosition: Int

   }

   """
   Brake system signals
   """
   type Vehicle_Chassis_Brake {
      """
      Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
      """
      pedalPosition: Int

   }

   """
   OBD data.
   """
   type Vehicle_OBD {
      """
      PID 00 - Bit array of the supported pids 01 to 20
      """
      pidsA: Int

      """
      PID 01 - OBD status
      """
      status: Vehicle_OBD_Status

      """
      List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )
      """
      dTCList: [String]

      """
      PID 02 - DTC that triggered the freeze frame
      """
      freezeDTC: String

      """
      PID 03 - Fuel status
      """
      fuelStatus: String

      """
      PID 04 - Engine load in percent - 0 = no load, 100 = full load
      """
      engineLoad: Float

      """
      PID 05 - Coolant temperature
      """
      coolantTemperature: Float

      """
      PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
      """
      shortTermFuelTrim1: Float

      """
      PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
      """
      longTermFuelTrim1: Float

      """
      PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
      """
      shortTermFuelTrim2: Float

      """
      PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
      """
      longTermFuelTrim2: Float

      """
      PID 0A - Fuel pressure
      """
      fuelPressure: Float

      """
      PID 0B - Intake manifold pressure
      """
      mAP: Float

      """
      PID 0C - Engine speed measured as rotations per minute
      """
      engineSpeed: Float

      """
      PID 0D - Vehicle speed
      """
      speed: Float

      """
      PID 0E - Time advance
      """
      timingAdvance: Float

      """
      PID 0F - Intake temperature
      """
      intakeTemp: Float

      """
      PID 10 - Grams of air drawn into engine per second
      """
      mAF: Float

      """
      PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle
      """
      throttlePosition: Float

      """
      PID 12 - Secondary air status
      """
      airStatus: String

      """
      PID 13 - Presence of oxygen sensors in 2 banks. [A0..A3] == Bank 1, Sensors 1-4. [A4..A7] == Bank 2, Sensors 1-4
      """
      oxygenSensorsIn2Banks: Int

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      o2: Vehicle_OBD_O2

      """
      PID 1C - OBD standards this vehicle conforms to
      """
      oBDStandards: Int

      """
      PID 1D - Presence of oxygen sensors in 4 banks. Similar to PID 13, but [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2]
      """
      oxygenSensorsIn4Banks: Int

      """
      PID 1E - Auxiliary input status (power take off)
      """
      auxInputStatus: Boolean

      """
      PID 1F - Engine run time
      """
      runTime: Float

      """
      PID 20 - Bit array of the supported pids 21 to 40
      """
      pidsB: Int

      """
      PID 21 - Distance traveled with MIL on
      """
      distanceWithMIL: Float

      """
      PID 22 - Fuel rail pressure relative to vacuum
      """
      fuelRailPressureVac: Float

      """
      PID 23 - Fuel rail pressure direct inject
      """
      fuelRailPressureDirect: Float

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      o2WR: Vehicle_OBD_O2WR

      """
      PID 2C - Commanded exhaust gas recirculation (EGR)
      """
      commandedEGR: Float

      """
      PID 2D - Exhaust gas recirculation (EGR) error
      """
      eGRError: Float

      """
      PID 2E - Commanded evaporative purge (EVAP) valve
      """
      commandedEVAP: Float

      """
      PID 2F - Fuel level in the fuel tank
      """
      fuelLevel: Float

      """
      PID 30 - Number of warm-ups since codes cleared
      """
      warmupsSinceDTCClear: Int

      """
      PID 31 - Distance traveled since codes cleared
      """
      distanceSinceDTCClear: Float

      """
      PID 32 - Evaporative purge (EVAP) system pressure
      """
      eVAPVaporPressure: Float

      """
      PID 33 - Barometric pressure
      """
      barometricPressure: Float

      """
      Catalyst signals
      """
      catalyst: Vehicle_OBD_Catalyst

      """
      PID 40 - Bit array of the supported pids 41 to 60
      """
      pidsC: Int

      """
      PID 41 - OBD status for the current drive cycle
      """
      driveCycleStatus: Vehicle_OBD_DriveCycleStatus

      """
      PID 42 - Control module voltage
      """
      controlModuleVoltage: Float

      """
      PID 43 - Absolute load value
      """
      absoluteLoad: Float

      """
      PID 44 - Commanded equivalence ratio
      """
      commandedEquivalenceRatio: Float

      """
      PID 45 - Relative throttle position
      """
      relativeThrottlePosition: Float

      """
      PID 46 - Ambient air temperature
      """
      ambientAirTemperature: Float

      """
      PID 47 - Absolute throttle position B
      """
      throttlePositionB: Float

      """
      PID 48 - Absolute throttle position C
      """
      throttlePositionC: Float

      """
      PID 49 - Accelerator pedal position D
      """
      acceleratorPositionD: Float

      """
      PID 4A - Accelerator pedal position E
      """
      acceleratorPositionE: Float

      """
      PID 4B - Accelerator pedal position F
      """
      acceleratorPositionF: Float

      """
      PID 4C - Commanded throttle actuator
      """
      throttleActuator: Float

      """
      PID 4D - Run time with MIL on
      """
      runTimeMIL: Float

      """
      PID 4E - Time since trouble codes cleared
      """
      timeSinceDTCCleared: Float

      """
      PID 50 - Maximum flow for mass air flow sensor
      """
      maxMAF: Float

      """
      PID 51 - Fuel type
      """
      fuelType: String

      """
      PID 52 - Percentage of ethanol in the fuel
      """
      ethanolPercent: Float

      """
      PID 53 - Absolute evaporative purge (EVAP) system pressure
      """
      eVAPVaporPressureAbsolute: Float

      """
      PID 54 - Alternate evaporative purge (EVAP) system pressure
      """
      eVAPVaporPressureAlternate: Float

      """
      PID 55 (byte A) - Short term secondary O2 trim - Bank 1
      """
      shortTermO2Trim1: Float

      """
      PID 55 (byte B) - Short term secondary O2 trim - Bank 3
      """
      shortTermO2Trim3: Float

      """
      PID 56 (byte A) - Long term secondary O2 trim - Bank 1
      """
      longTermO2Trim1: Float

      """
      PID 56 (byte B) - Long term secondary O2 trim - Bank 3
      """
      longTermO2Trim3: Float

      """
      PID 57 (byte A) - Short term secondary O2 trim - Bank 2
      """
      shortTermO2Trim2: Float

      """
      PID 57 (byte B) - Short term secondary O2 trim - Bank 4
      """
      shortTermO2Trim4: Float

      """
      PID 58 (byte A) - Long term secondary O2 trim - Bank 2
      """
      longTermO2Trim2: Float

      """
      PID 58 (byte B) - Long term secondary O2 trim - Bank 4
      """
      longTermO2Trim4: Float

      """
      PID 59 - Absolute fuel rail pressure
      """
      fuelRailPressureAbsolute: Float

      """
      PID 5A - Relative accelerator pedal position
      """
      relativeAcceleratorPosition: Float

      """
      PID 5B - Remaining life of hybrid battery
      """
      hybridBatteryRemaining: Float

      """
      PID 5C - Engine oil temperature
      """
      oilTemperature: Float

      """
      PID 5D - Fuel injection timing
      """
      fuelInjectionTiming: Float

      """
      PID 5E - Engine fuel rate
      """
      fuelRate: Float

   }

   """
   PID 01 - OBD status
   """
   type Vehicle_OBD_Status {
      """
      Malfunction Indicator Light (MIL) False = Off, True = On
      """
      mIL: Boolean

      """
      Number of sensor Trouble Codes (DTC)
      """
      dTCCount: Int

      """
      Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
      """
      ignitionType: String

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2 {
      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor1: Vehicle_OBD_O2_Sensor1

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor2: Vehicle_OBD_O2_Sensor2

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor3: Vehicle_OBD_O2_Sensor3

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor4: Vehicle_OBD_O2_Sensor4

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor5: Vehicle_OBD_O2_Sensor5

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor6: Vehicle_OBD_O2_Sensor6

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor7: Vehicle_OBD_O2_Sensor7

      """
      Oxygen sensors (PID 14 - PID 1B)
      """
      sensor8: Vehicle_OBD_O2_Sensor8

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor1 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor2 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor3 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor4 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor5 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor6 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor7 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Oxygen sensors (PID 14 - PID 1B)
   """
   type Vehicle_OBD_O2_Sensor8 {
      """
      PID 1x (byte A) - Sensor voltage
      """
      voltage: Float

      """
      PID 1x (byte B) - Short term fuel trim
      """
      shortTermFuelTrim: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR {
      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor1: Vehicle_OBD_O2WR_Sensor1

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor2: Vehicle_OBD_O2WR_Sensor2

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor3: Vehicle_OBD_O2WR_Sensor3

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor4: Vehicle_OBD_O2WR_Sensor4

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor5: Vehicle_OBD_O2WR_Sensor5

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor6: Vehicle_OBD_O2WR_Sensor6

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor7: Vehicle_OBD_O2WR_Sensor7

      """
      Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
      """
      sensor8: Vehicle_OBD_O2WR_Sensor8

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor1 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor2 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor3 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor4 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor5 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor6 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor7 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)
   """
   type Vehicle_OBD_O2WR_Sensor8 {
      """
      PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
      """
      lambda: Float

      """
      PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
      """
      voltage: Float

      """
      PID 3x (byte CD) - Current for wide range/band oxygen sensor
      """
      current: Float

   }

   """
   Catalyst signals
   """
   type Vehicle_OBD_Catalyst {
      """
      Catalyst bank 1 signals
      """
      bank1: Vehicle_OBD_Catalyst_Bank1

      """
      Catalyst bank 2 signals
      """
      bank2: Vehicle_OBD_Catalyst_Bank2

   }

   """
   Catalyst bank 1 signals
   """
   type Vehicle_OBD_Catalyst_Bank1 {
      """
      PID 3C - Catalyst temperature from bank 1, sensor 1
      """
      temperature1: Float

      """
      PID 3E - Catalyst temperature from bank 1, sensor 2
      """
      temperature2: Float

   }

   """
   Catalyst bank 2 signals
   """
   type Vehicle_OBD_Catalyst_Bank2 {
      """
      PID 3D - Catalyst temperature from bank 2, sensor 1
      """
      temperature1: Float

      """
      PID 3F - Catalyst temperature from bank 2, sensor 2
      """
      temperature2: Float

   }

   """
   PID 41 - OBD status for the current drive cycle
   """
   type Vehicle_OBD_DriveCycleStatus {
      """
      Malfunction Indicator Light (MIL) - False = Off, True = On
      """
      mIL: Boolean

      """
      Number of sensor Trouble Codes (DTC)
      """
      dTCCount: Int

      """
      Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
      """
      ignitionType: String

   }

   """
   Driver data.
   """
   type Vehicle_Driver {
      """
      Identifier attributes based on OAuth 2.0.
      """
      identifier: Vehicle_Driver_Identifier

      """
      Distraction level of the driver will be the level how much the driver is distracted, by multiple factors. E.g. Driving situation, acustical or optical signales inside the cockpit, phone calls
      """
      distractionLevel: Float

      """
      Has driver the eyes on road or not?
      """
      eyesOnRoad: Boolean

      """
      Probability of attentiveness of the driver.
      """
      attentiveProbability: Float

      """
      Fatigueness level of driver. Evaluated by multiple factors like trip time, behaviour of steering, eye status.
      """
      fatigueLevel: Float

      """
      Heart rate of the driver.
      """
      heartRate: Int

   }

   """
   Identifier attributes based on OAuth 2.0.
   """
   type Vehicle_Driver_Identifier {
      """
      Subject for the authentification of the occupant. E.g. UserID 7331677
      """
      subject: String

      """
      Unique Issuer for the authentification of the occupant. E.g. https://accounts.funcorp.com
      """
      issuer: String

   }

   """
   Service data.
   """
   type Vehicle_Service {
      """
      Indicates if vehicle needs service (of any kind). True = Service needed now or in the near future. False = No known need for service.
      """
      serviceDue: Boolean

      """
      Remaining distance to service (of any kind). Negative values indicate service overdue.
      """
      distanceToService: Float

      """
      Remaining time to service (of any kind). Negative values indicate service overdue.
      """
      timeToService: Int

   }

`;
export default Vehicle;
