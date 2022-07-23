import { Injectable } from '@angular/core';
import { DriverDTO } from './driver.dto';

@Injectable({
  providedIn: 'root',
})
export class DriversMockService {
  private mockDriversData: DriverDTO[] = [
    {
      id: '1',
      surname: 'Thaxter',
      mileage: 853400.15,
      seniority: 5,
    },
    {
      id: '2',
      surname: 'Spain',
      mileage: 756582.78,
      seniority: 10,
    },
    {
      id: '3',
      surname: 'Palke',
      mileage: 765940.0,
      seniority: 4,
    },
    {
      id: '4',
      surname: 'Bartlomiejczyk',
      mileage: 379590.55,
      seniority: 7,
    },
    {
      id: '5',
      surname: 'Wermerling',
      mileage: 641536.58,
      seniority: 4,
    },
    {
      id: '6',
      surname: 'Leggitt',
      mileage: 311781.72,
      seniority: 10,
    },
    {
      id: '7',
      surname: 'Bateman',
      mileage: 380334.25,
      seniority: 2,
    },
    {
      id: '8',
      surname: 'Helstrom',
      mileage: 665093.0,
      seniority: 2,
    },
    {
      id: '9',
      surname: 'Douglass',
      mileage: 982055.89,
      seniority: 14,
    },
    {
      id: '10',
      surname: 'Cavalier',
      mileage: 517687.83,
      seniority: 11,
    },
  ];

  async getAll(): Promise<DriverDTO[]> {
    return this.mockDriversData;
  }
}
