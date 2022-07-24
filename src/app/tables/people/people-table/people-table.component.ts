import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/common/table/column';
import { Row } from 'src/app/common/table/row';
import { TableTitle } from 'src/app/common/table/table-title';
import {
  PeopleTableRowData,
  PeopleTableService,
} from '../people-table.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent implements OnInit {
  rows: Row<PeopleTableRowData>[] = [];
  columns: Column[] = [];
  title = new TableTitle('People');

  constructor(private readonly tableService: PeopleTableService) {
    this.tableService.getRows().then((rows) => (this.rows = rows));
    this.tableService.getColumns().then((cols) => (this.columns = cols));
  }

  ngOnInit(): void {}
}
