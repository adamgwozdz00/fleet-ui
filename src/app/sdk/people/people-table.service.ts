import {Injectable} from '@angular/core';
import {PeopleMockService} from 'src/app/sdk/people/people-mock.service';
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {Column} from "../../common/fleet-table/column";

@Injectable({
  providedIn: 'root',
})
export class PeopleTableService {
  constructor(private readonly service: PeopleMockService) {
  }

  async getRows(): Promise<Row[]> {
    return this.service
    .getAll()
    .then((people) =>
      people.map(
        (p) => new Row([new Column(p.id), new Column(p.surname), new Column(p.seniority)])
      )
    );
  }


  getHeaderRow(): Promise<HeaderRow> {
    return Promise.resolve(new HeaderRow([
      new Column('identity'),
      new Column('last name'),
      new Column('seniority')
    ]));
  }
}

