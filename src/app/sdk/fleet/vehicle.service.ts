import {CreateVehicleDTO, VehiclesDTO} from "./vehicle.dto";
import {InjectionToken} from "@angular/core";

export interface VehicleService {
  getAll(): Promise<VehiclesDTO>
  create(body : CreateVehicleDTO): Promise<void>
}

export const VEHICLE_SERVICE = new InjectionToken<VehicleService>("mock data service");
