import { Injectable } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Row } from 'src/app/common/table/row';
import { DriversMockService } from 'src/app/sdk/drivers/drivers-mock.service';

@Injectable({
  providedIn: 'root',
})
export class DriversTableService {
  constructor(private readonly service: DriversMockService) {}

  async getRows(): Promise<Row<DriversTableRowData>[]> {
    return this.service
      .getAll()
      .then((drivers) =>
        drivers.map(
          (d) =>
            new Row(
              new DriversTableRowData(d.id, d.surname, d.mileage, d.seniority)
            )
        )
      );
  }

  async getColumns(): Promise<Column[]> {
    return [
      new Column('identity', 'id', true),
      new Column('last name', 'surname'),
      new Column('mileage', 'mileage'),
      new Column('seniority', 'seniority'),
    ];
  }
}

export class DriversTableRowData {
  constructor(
    public id: string,
    public surname: string,
    public mileage: number,
    public seniority: number
  ) {}
}
