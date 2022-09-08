import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Column } from 'src/app/common/table/column';
import { TableTitle } from 'src/app/common/table/table-title';
import {
  CarDetailsTableService,
  HistoryTableRow,
} from 'src/app/sdk/car-details/car-details-table.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carId: string;
  historyRows: HistoryTableRow[] = [];
  historyColumns: Column[] = [];
  parametersTitle = new TableTitle('Parameters');
  historyTitle = new TableTitle('History');

  constructor(
    private router: Router,
    private readonly carDetailsTableService: CarDetailsTableService
  ) {
    const state = router.getCurrentNavigation().extras.state;
    if (state) {
      this.carId = state.id;
    }
    this.carDetailsTableService
      .getHistoryRows("x")
      .then((rows) => 
        {
          console.log(rows)
           this.historyRows = rows}
          );
    this.carDetailsTableService
      .getHistoryColumns()
      .then((cols) => (this.historyColumns = cols));
  }

  ngOnInit(): void {}
}
