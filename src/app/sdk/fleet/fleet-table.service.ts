import {Injectable} from '@angular/core';
import {FleetMockService} from 'src/app/sdk/fleet/fleet-mock.service';
import {Column} from "../../common/fleet-table/column";
import {HeaderRow, Row} from "../../common/fleet-table/row";

@Injectable({
  providedIn: 'root',
})
export class FleetTableService {
  constructor(
    private readonly service: FleetMockService
  ) {
  }

  async getHeaderRows(): Promise<HeaderRow> {
    return Promise.resolve(new HeaderRow(
      [new Column("id"),
        new Column("make"),
        new Column("year"),
        new Column("mileage"),
        new Column("type")]
    ));
  }

  async getRows(): Promise<Row[]> {
    return this.service
    .getAll()
    .then((vehicles) =>
      vehicles.map(
        (v) =>
          new Row([
            new Column(v.id),
            new Column(v.make),
            new Column(v.year),
            new Column(v.mileage),
            new Column(v.type),
          ])
      )
    );
  }
}
