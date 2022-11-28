import {Column} from "./column";

export class Row {
  constructor(public columns: Column[]) {
  }
}

export class HeaderRow extends Row {
  static createForColumnTitles(columnTitles: string[]): HeaderRow {
    return new HeaderRow(columnTitles.map(title => new Column(title)));
  }
}

