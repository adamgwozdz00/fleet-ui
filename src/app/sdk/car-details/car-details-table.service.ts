import {Injectable} from '@angular/core';
import {Column} from 'src/app/common/table/column';
import {Row} from 'src/app/common/table/row';
import {CarDetailsMockService} from './car-details-mock.service';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsTableService {
  constructor(private readonly service: CarDetailsMockService) {
  }

  async getHistoryRows(carId: string): Promise<HistoryTableRow[]> {
    return this.service
    .getCarsHistory(carId)
    .then((history) =>
      history.map(
        (h) => new HistoryTableRow(h.date, h.driverId, h.driverName, h.issue)
      )
    );
  }

  async getHistoryColumns(): Promise<Column[]> {
    return [
      new Column('date', 'date'),
      new Column('driver identity', 'driverId'),
      new Column('driver name', 'driverName'),
      new Column('issue', 'issue'),
    ];
  }
}

export class HistoryTableRow extends Row {
  constructor(
    public date: string,
    public driverId: string,
    public driverName: string,
    public issue: string = ''
  ) {
    super();
  }
}

export class InsuranceTableRow extends Row {
  constructor(
    public startDate: string,
    public endDate: string,
    public insurer: string
  ) {
    super();
  }
}
