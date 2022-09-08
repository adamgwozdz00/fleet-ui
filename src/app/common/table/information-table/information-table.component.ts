import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../column';
import { Row } from '../row';
import { TableTitle } from '../table-title';

@Component({
  selector: 'information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {

  @Input() columns: Column[] = [];
  @Input() rows: Row[] = [];
  @Input() title: TableTitle = new TableTitle();
  displayedColumns: String[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((col) => col.definition);
  }

}
