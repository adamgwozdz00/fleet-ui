import {VehiclesDTO} from "./vehicle.dto";
import {InjectionToken} from "@angular/core";

export interface VehicleService {
  getAll(): Promise<VehiclesDTO>
}

export const VEHICLE_SERVICE = new InjectionToken<VehicleService>("mock data service");
