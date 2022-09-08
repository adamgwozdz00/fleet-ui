import { Component, Input, OnInit, Output } from '@angular/core';
import { ButtonDetails } from '../../common-button/button-details';
import { Column } from '../column';
import { Options, Row } from '../row';
import { TableTitle } from '../table-title';

@Component({
  selector: 'management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css'],
})
export class ManagementTableComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() rows: Row[] = [];
  @Input() title: TableTitle = new TableTitle();
  @Input() addButtonFunction: Function = () => console.log("add event fires...");
  

  displayedColumns: String[] = [];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((col) => col.definition);
  }

  isOptions(element: any): boolean {
    if (!(element instanceof Options)) {
      return false;
    }
    if (element.isEmpty()) {
      throw new Error('Options column provided but row options are empty...');
    }

    return true;
  }

  isPrimitive(element: any): boolean {
    return !this.isOptions(element);
  }
}
