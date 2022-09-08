import { Injectable } from '@angular/core';
import { CarHistoryDetailsDTO } from './car-history-details.dto';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsMockService {
  private mockCarHistory: CarHistoryDetailsDTO[] = [
    {
      date: '12/15/2020',
      driverId: 'Albert',
      driverName: 'Vannacci',
      issue: 'Organized eco-centric capacity',
    },
    {
      date: '2/21/2020',
      driverId: 'Maggi',
      driverName: 'Gwatkins',
      issue: 'Organic executive task-force',
    },
    {
      date: '12/26/2021',
      driverId: 'Catie',
      driverName: 'Humerstone',
      issue: 'Distributed motivating complexity',
    },
    {
      date: '3/30/2020',
      driverId: 'Olag',
      driverName: 'Fowlds',
      issue: 'Optional systemic archive',
    },
    {
      date: '7/16/2022',
      driverId: 'Curcio',
      driverName: 'Cumbers',
      issue: 'Team-oriented intangible matrices',
    },
    {
      date: '10/29/2020',
      driverId: 'Bernadine',
      driverName: 'Masic',
      issue: 'Open-source transitional initiative',
    },
    {
      date: '6/15/2022',
      driverId: 'Mattie',
      driverName: 'Kirtley',
      issue: 'Sharable holistic archive',
    },
    {
      date: '5/8/2020',
      driverId: 'Patricio',
      driverName: 'Treppas',
      issue: 'Visionary maximized structure',
    },
    {
      date: '4/19/2021',
      driverId: 'Darrell',
      driverName: 'Avrahamoff',
      issue: 'Ergonomic dedicated orchestration',
    },
    {
      date: '10/25/2020',
      driverId: 'Min',
      driverName: 'Dawber',
      issue: 'Profound bottom-line pricing structure',
    },
  ];

  async getCarsHistory(carId: string): Promise<CarHistoryDetailsDTO[]> {
    return this.mockCarHistory;
  }
}
