import { Component, Input, OnInit, Output } from '@angular/core';
import { Column } from '../column';
import { Row } from '../row';
import { TableTitle } from '../table-title';

@Component({
  selector: 'management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() rows: Row<any>[] = [];
  @Input() title: TableTitle = new TableTitle();

  displayedColumns: String[] = [];
  dataSource = [];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((col) => col.definition);
    this.dataSource = this.rows.map((row) => row.data);
  }
}
