import { Component, Input, OnInit } from '@angular/core';
import { Column } from './column';
import { Row } from './row';

class ExampleRow{
  position:number;
  name:string
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() columns: Column[] = [new Column("first","position",true), new Column("second","name",false)];
  @Input() rows: Row<ExampleRow>[] = [new Row({"position":1,"name":"hello"}),new Row({"position":2,"name":"world"})];
  displayedColumns: String[] = ['position', 'name'];
  dataSource = [
    { position: 1, name: 'Hydrogen'},
    { position: 2, name: 'Helium' },
    { position: 3, name: 'Lithium'},
    { position: 4, name: 'Beryllium' },
    { position: 5, name: 'Boron'},
    { position: 6, name: 'Carbon' },
    { position: 7, name: 'Nitrogen' },
    { position: 8, name: 'Oxygen' },
    { position: 9, name: 'Fluorine' },
    { position: 10, name: 'Neon' },
  ];

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
