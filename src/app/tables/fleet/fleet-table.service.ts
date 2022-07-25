import { Injectable } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Options, Row } from 'src/app/common/table/row';
import { RowButton } from 'src/app/common/table/row-button';
import { FleetMockService } from 'src/app/sdk/fleet/fleet-mock.service';

@Injectable({
  providedIn: 'root',
})
export class FleetTableService {
  constructor(private readonly service: FleetMockService) {}

  async getRows(): Promise<FleetTableRow[]> {
    return this.service
      .getAll()
      .then((vehicles) =>
        vehicles.map(
          (v) =>
            new FleetTableRow(
              v.id,
              v.make,
              v.year,
              v.mileage,
              v.type,
              this.createOptions()
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
      new Column('options', 'options'),
    ];
  }

  private createOptions(): Options {
    const editButton = new RowButton('EDIT', () =>
      console.log('fleet editing execute...')
    );
    const removeButton = new RowButton('REMOVE', () =>
      console.log('fleet removing execute...')
    );
    return new Options(editButton, removeButton);
  }
}

export class FleetTableRow extends Row {
  private;

  constructor(
    public id: string,
    public make: string,
    public year: number,
    public mileage: number,
    public type: string,
    public options: Options = Options.EMPTY_OPTIONS
  ) {
    super(options);
  }

  public getData() {
    throw new Error('Method not implemented.');
  }
}
