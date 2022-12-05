import {CreateVehicleDTO, VehiclesDTO} from "./vehicle.dto";
import {InjectionToken} from "@angular/core";
import {FuelTypes} from "./fuel-types";

export interface VehicleService {
  getAll(): Promise<VehiclesDTO>

  create(body: CreateVehicleDTO): Promise<void>

  getFuelTypes(): Promise<FuelTypes>
}

export const VEHICLE_SERVICE = new InjectionToken<VehicleService>("mock data service");
