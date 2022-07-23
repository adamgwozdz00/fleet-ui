import { Injectable } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Row } from 'src/app/common/table/row';
import { FleetMockService } from 'src/app/sdk/fleet/fleet-mock.service';

@Injectable({
  providedIn: 'root',
})
export class FleetTableService {
  constructor(private readonly service: FleetMockService) {}

  async getRows(): Promise<Row<FleetTableRowData>[]> {
    return this.service
      .getAll()
      .then((vehicles) =>
        vehicles.map(
          (v) =>
            new Row(
              new FleetTableRowData(v.id, v.make, v.year, v.mileage, v.type)
            )
        )
      );
  }

  async getColumns(): Promise<Column[]> {
    return [
      new Column('identity', 'id', true),
      new Column('make', 'make'),
      new Column('car type', 'type'),
      new Column('year', 'year'),
      new Column('mileage', 'mileage'),
    ];
  }
}

export class FleetTableRowData {
  constructor(
    public id: string,
    public make: string,
    public year: number,
    public mileage: number,
    public type: string
  ) {}
}
