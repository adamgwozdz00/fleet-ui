import {InputFile} from "./input-file";

export class CSV implements InputFile {
  constructor(private _headerRow: CSVRow,
              private _rows: CSVRow[],
              private _separator: string = ",") {
  }

  get headerRow(): CSVRow {
    return this._headerRow;
  }

  get rows(): CSVRow[] {
    return this._rows;
  }

  static of(data: string, separator: string = ","): CSV {
    const splitData = data.split("\n");

    return new CSV(
      CSVRow.createBy(splitData[0], separator),
      splitData.slice(1).map(row => CSVRow.createBy(row, separator),
        separator));
  }

}

export class CSVRow {


  constructor(private _cells: string[]) {
  }

  get cells(): string[] {
    return this._cells;
  }

  static createBy(row: string, separator: string) {
    return new CSVRow(row.split(separator).map(cell => cell.trim()));
  }
}
