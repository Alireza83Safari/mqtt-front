import { User } from './user';

export class BaseDevice {
  constructor(
    public createdAt: string,
    public currentAvg: number,
    public deviceId: string,
    public displayName: string,
    public id: string,
    public lastCurrentAvg: number,
    public lastSocAvg: number,
    public lastVoltageAvg: number,
    public socAvg: number,
    public voltageAvg: number
  ) {}
}

export class Device extends BaseDevice {
  constructor(
    createdAt: string,
    currentAvg: number,
    deviceId: string,
    displayName: string,
    id: string,
    lastCurrentAvg: number,
    lastSocAvg: number,
    lastVoltageAvg: number,
    socAvg: number,
    voltageAvg: number,
    public users: User[],
    public metrics: Metrics[]
  ) {
    super(
      createdAt,
      currentAvg,
      deviceId,
      displayName,
      id,
      lastCurrentAvg,
      lastSocAvg,
      lastVoltageAvg,
      socAvg,
      voltageAvg
    );
  }
}

export class Metrics {
  constructor(
    public createdAt: string,
    public cubeNum: number,
    public cubeOp: number,
    public currentAvg: number,
    public currentMax: number,
    public currentMin: number,
    public dateTime: string,
    public deviceId: string,
    public id: string,
    public socAvg: number,
    public socMax: number,
    public socMin: number,
    public voltageAvg: number,
    public voltageMax: number,
    public voltageMin: number
  ) {}
}

export class MetricsChart {
  constructor(
    public currentAvg: number,
    public currentMax: number,
    public currentMin: number,
    public socAvg: number,
    public socMax: number,
    public socMin: number,
    public voltageAvg: number,
    public voltageMax: number,
    public voltageMin: number,
    public time: string
  ) {}
}
