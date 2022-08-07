import { Injectable } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Options, Row } from 'src/app/common/table/row';
import { FleetMockService } from 'src/app/sdk/fleet/fleet-mock.service';
import { DetailsButton } from 'src/app/common/table/details-button';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FleetTableService {
  constructor(
    private readonly service: FleetMockService,
    private readonly router: Router
  ) {}

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
              this.createOptions(v.id)
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

  private createOptions(id: string): Options {
    return new Options().withDetailsButton(
      new DetailsButton('DETAILS', () => this.router.navigate(['/details'],{state:{id:id}}))
    );
  }
}

export class FleetTableRow extends Row {
  constructor(
    public id: string,
    public make: string,
    public year: number,
    public mileage: number,
    public type: string,
    public options: Options = new Options()
  ) {
    super(options);
  }

  public getData() {
    throw new Error('Method not implemented.');
  }
}
