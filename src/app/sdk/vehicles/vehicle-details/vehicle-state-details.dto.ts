import {VehicleStatus} from "../vehicle-status";

export interface VehicleStateDetailsDTO {
  readonly vehicleStateDetails: VehicleStateDetailsRecord[];
}

export interface VehicleStateDetailsRecord {
  time: Date;
  actualDriverId: number;
  status: VehicleStatus;
  kilometers: number;
  liters: number;

  longitude: number;

  latitude: number;
}

