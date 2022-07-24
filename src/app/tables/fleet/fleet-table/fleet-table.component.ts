import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Row } from 'src/app/common/table/row';
import { TableTitle } from 'src/app/common/table/table-title';
import { FleetTableRowData, FleetTableService } from '../fleet-table.service';

@Component({
  selector: 'app-fleet-table',
  templateUrl: './fleet-table.component.html',
  styleUrls: ['./fleet-table.component.css'],
})
export class FleetTableComponent implements OnInit {
  rows: Row<FleetTableRowData>[] = [];
  columns: Column[] = [];
  title = new TableTitle("Fleet");

  constructor(private readonly tableService: FleetTableService) {
    this.tableService.getRows().then((rows) => (this.rows = rows));
    this.tableService.getColumns().then((cols) => (this.columns = cols));
  }

  ngOnInit(): void {}
}
