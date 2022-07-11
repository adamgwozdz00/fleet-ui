import { PersonDTO } from './person.dto';

export interface PeopleService {
  createPerson(person: PersonDTO): any;
  getPeople(): Promise<PersonDTO[]>;
}
