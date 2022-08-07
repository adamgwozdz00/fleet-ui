import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Row } from 'src/app/common/table/row';
import { TableTitle } from 'src/app/common/table/table-title';
import {
  DriversTableRow,
  DriversTableService,
} from '../../../sdk/drivers/drivers-table.service';

@Component({
  selector: 'app-divers-table',
  templateUrl: './divers-table.component.html',
  styleUrls: ['./divers-table.component.css'],
})
export class DiversTableComponent implements OnInit {
  rows: DriversTableRow[] = [];
  columns: Column[] = [];
  title = new TableTitle('Drivers');

  constructor(private readonly tableService: DriversTableService) {
    this.tableService.getRows().then((rows) => (this.rows = rows));
    this.tableService.getColumns().then((cols) => (this.columns = cols));
  }

  ngOnInit(): void {}
}
