export class Battery {
  constructor(
    public createdAt: string,
    public displayName: string,
    public id: string
  ) {}
}

export class Sensors {
  constructor(
    public batteryActivity: string,
    public batteryCharge: number,
    public batteryCurrent: number,
    public batteryError: string,
    public batteryState: string,
    public batteryStatus: string,
    public batteryTemperature: number,
    public batteryTension: number,
    public batteryWarning: string,
    public createdAt: string,
    public errorHistory: string,
    public gridState: number,
    public id: string,
    public inverterState: string,
    public meterState: number,
    public meterStatus: string,
    public numberBattery: number,
    public pvState: number,
    public recommendedaCharge: number,
    public recommendedaDischarge: number,
    public recommendedvCharge: number,
    public recommendedvDischarge: number,
    public stateTimeline: string,
    public status: number,
    public timestamp: string
  ) {}
}

export class SensorsChart {
  constructor(
    public battState: number,
    public gridState: number,
    public meterState: number,
    public pvState: number,
    public time: string
  ) {}
}
