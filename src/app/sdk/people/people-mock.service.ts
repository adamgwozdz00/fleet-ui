import {Injectable} from '@angular/core';
import {PersonDTO} from './person.dto';

@Injectable({
  providedIn: 'root',
})
export class PeopleMockService {
  private mockPersonData: PersonDTO[] = [
    {
      id: '188',
      surname: 'Heineke',
      seniority: 2,
    },
    {
      id: '105',
      surname: 'Semens',
      seniority: 15,
    },
    {
      id: '149',
      surname: 'Evreux',
      seniority: 13,
    },
    {
      id: '115',
      surname: 'Titley',
      seniority: 7,
    },
    {
      id: '107',
      surname: 'Drewes',
      seniority: 12,
    },
    {
      id: '112',
      surname: 'Josefson',
      seniority: 3,
    },
    {
      id: '135',
      surname: 'Widmore',
      seniority: 3,
    },
    {
      id: '133',
      surname: 'Gildea',
      seniority: 2,
    },
    {
      id: '148',
      surname: 'Heaker',
      seniority: 6,
    },
    {
      id: '139',
      surname: 'Blasetti',
      seniority: 14,
    },
  ];

  async getAll(): Promise<PersonDTO[]> {
    return this.mockPersonData;
  }
}
