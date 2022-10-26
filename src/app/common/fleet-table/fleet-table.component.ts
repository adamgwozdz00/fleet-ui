import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {HeaderRow, Row} from "./row";
import {Column} from "./column";
import {Title} from "./title";


@Component({
  selector: 'fleet-table',
  templateUrl: './fleet-table.component.html',
  styleUrls: ['./fleet-table.component.css']
})
export class FleetTableComponent implements OnInit {


  @Input()
  title: Title = new Title("Example")
  @Input()
  headerRow: HeaderRow = new HeaderRow([new Column("id"),
    new Column("name"),
    new Column("age"), new Column("Button")]);

  @Input()
  rows: Row[] = [new Row([new Column("1"), new Column("Adam"), new Column("22")]),
    new Row([new Column("2"), new Column("Werka"), new Column("21")]),
    new Row([new Column("3"), new Column("Krzys"), new Column("45")]),
    new Row([new Column("4"), new Column("Katarzyna"), new Column("33")])]

  @ContentChild(TemplateRef)
  additionalColumnTemplate: TemplateRef<any>


  constructor() {
  }

  ngOnInit(): void {

  }


}
