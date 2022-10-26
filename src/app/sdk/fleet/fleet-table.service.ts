import {Injectable} from '@angular/core';
import {FleetMockService} from 'src/app/sdk/fleet/fleet-mock.service';
import {Column} from "../../common/fleet-table/column";
import {Row} from "../../common/fleet-table/row";

@Injectable({
  providedIn: 'root',
})
export class FleetTableService {
  constructor(
    private readonly service: FleetMockService
  ) {
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
