import {Injectable} from '@angular/core';
import {Column} from 'src/app/common/table/column';
import {Row} from 'src/app/common/table/row';
import {PeopleMockService} from 'src/app/sdk/people/people-mock.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleTableService {
  constructor(private readonly service: PeopleMockService) {
  }

  async getRows(): Promise<PeopleTableRow[]> {
    return this.service
    .getAll()
    .then((people) =>
      people.map(
        (p) => new PeopleTableRow(p.id, p.surname, p.seniority)
      )
    );
  }

  async getColumns(): Promise<Column[]> {
    return [
      new Column('identity', 'id', true),
      new Column('last name', 'surname'),
      new Column('seniority', 'seniority'),
    ];
  }
}

export class PeopleTableRow extends Row {
  constructor(
    public id: string,
    public surname: string,
    public seniority: number
  ) {
    super();
  }
}
