import { Component, Input, OnInit } from '@angular/core';
import { Column } from './column';
import { Row } from './row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() rows: Row<any>[] = [];
  @Input() title: string;
  displayedColumns: String[] = [];
  dataSource = [];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((col) => col.definition);
    this.dataSource = this.rows.map((row) => row.data);
  }
}
