import {Injectable} from '@angular/core';
import {VehicleDTO} from 'src/app/sdk/fleet/vehicle.dto';

@Injectable({
  providedIn: 'root',
})
export class FleetMockService {
  private mockFleetData: VehicleDTO[] = [
    {
      id: '3920',
      make: 'BMW',
      year: 2009,
      mileage: 473050.5,
      type: 'VAN',
    },
    {
      id: '3390',
      make: 'GMC',
      year: 2006,
      mileage: 299450.0,
      type: 'TRUCK',
    },
    {
      id: '4211',
      make: 'Lexus',
      year: 2004,
      mileage: 358259.53,
      type: 'VAN',
    },
    {
      id: '3856',
      make: 'Lexus',
      year: 2007,
      mileage: 187320.17,
      type: 'PICKUP',
    },
    {
      id: '3459',
      make: 'Suzuki',
      year: 1987,
      mileage: 147923.49,
      type: 'TRUCK',
    },
    {
      id: '3436',
      make: 'Acura',
      year: 2011,
      mileage: 242069.19,
      type: 'MINITRUCK',
    },
    {
      id: '3934',
      make: 'Dodge',
      year: 1993,
      mileage: 254951.62,
      type: 'PICKUP',
    },
    {
      id: '4306',
      make: 'Mitsubishi',
      year: 1994,
      mileage: 250202.72,
      type: 'TRUCK',
    },
    {
      id: '4137',
      make: 'Ford',
      year: 2003,
      mileage: 285707.07,
      type: 'PICKUP',
    },
    {
      id: '3424',
      make: 'Audi',
      year: 1986,
      mileage: 179816.01,
      type: 'VAN',
    },
  ];

  createVehicle(vehicle: VehicleDTO) {
    this.mockFleetData.push(vehicle);
  }

  async getAll(): Promise<VehicleDTO[]> {
    return this.mockFleetData;
  }
}
