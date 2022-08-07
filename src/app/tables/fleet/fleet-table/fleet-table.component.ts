import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { DetailsButton } from 'src/app/common/table/details-button';
import { TableTitle } from 'src/app/common/table/table-title';
import { FleetTableRow, FleetTableService } from '../fleet-table.service';

@Component({
  selector: 'app-fleet-table',
  templateUrl: './fleet-table.component.html',
  styleUrls: ['./fleet-table.component.css'],
})
export class FleetTableComponent implements OnInit {
  rows: FleetTableRow[] = [];
  columns: Column[] = [];
  title = new TableTitle('Fleet');
  addButton = new DetailsButton('+ADD', () => {});

  constructor(private readonly tableService: FleetTableService) {
    this.tableService.getRows().then((rows) => (this.rows = rows));
    this.tableService.getColumns().then((cols) => (this.columns = cols));
    this.addButton = this.tableService.createAddButton("0ms","0ms");
  }

  ngOnInit(): void {}
}
