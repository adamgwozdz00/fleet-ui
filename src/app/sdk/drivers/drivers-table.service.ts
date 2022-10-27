import {Injectable} from '@angular/core';

import {DriversMockService} from 'src/app/sdk/drivers/drivers-mock.service';
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {Column} from "../../common/fleet-table/column";

@Injectable({
  providedIn: 'root',
})
export class DriversTableService {
  constructor(private readonly service: DriversMockService) {
  }

  async getRows(): Promise<Row[]> {
    return this.service
    .getAll()
    .then((drivers) =>
      drivers.map(
        (d) => new Row([new Column(d.id),
          new Column(d.surname),
          new Column(d.mileage),
          new Column(d.seniority)])
      )
    );
  }

  getHeaderRows(): Promise<HeaderRow> {
    return Promise.resolve(new HeaderRow([new Column('identity'),
      new Column('last name'),
      new Column('mileage'),
      new Column('seniority'),]))
  }
}


