import { VehicleDTO } from './vehicle.dto';

export interface FleetService {
  createVehicle(vehicle: VehicleDTO): any;
  getAll(): Promise<VehicleDTO[]>;
}
