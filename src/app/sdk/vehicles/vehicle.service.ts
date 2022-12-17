import {CreateVehicleDTO, VehiclesDTO} from "./vehicle.dto";
import {FuelTypes} from "./fuel-types";

export interface VehicleService {
  getAll(): Promise<VehiclesDTO>

  create(body: CreateVehicleDTO): Promise<void>

  getFuelTypes(): Promise<FuelTypes>
}
