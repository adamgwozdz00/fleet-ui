import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from "@angular/core";
import { HeaderRow, Row } from "./row";
import { Column } from "./column";
import { Title } from "./title";
import * as _ from "lodash";

@Component({
  selector: "fleet-table",
  templateUrl: "./fleet-table.component.html",
  styleUrls: ["./fleet-table.component.css"],
})
export class FleetTableComponent implements OnInit {
  @Input()
  title: Title = new Title("Example");
  @Input()
  headerRow: HeaderRow = new HeaderRow([
    new Column("id"),
    new Column("name"),
    new Column("age"),
    new Column("Button"),
  ]);

  @Input()
  rows: Row[] = [
    new Row([new Column("1"), new Column("Adam"), new Column("22")]),
    new Row([new Column("2"), new Column("Werka"), new Column("21")]),
    new Row([new Column("3"), new Column("Krzys"), new Column("45")]),
    new Row([new Column("4"), new Column("Katarzyna"), new Column("33")]),
  ];

  sortedRows: Row[];
  sortedColumnIndex: number;

  @ContentChild("additionalColumnTemplate")
  additionalColumnTemplate: TemplateRef<any>;

  @ContentChild("additionalButtonTemplate")
  additionalButtonTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  sortBy(columnIndex: number) {
    if (this.sortedColumnIndex === columnIndex) {
      this.sortedRows = undefined;
      this.sortedColumnIndex = undefined;
      return;
    }
    this.sortedRows = _.sortBy(
      this.rows,
      (o: Row) => o.columns[columnIndex].value
    );
    this.sortedColumnIndex = columnIndex;
  }

  get displayRows(): Row[] {
    return this.sortedRows || this.rows;
  }
}
