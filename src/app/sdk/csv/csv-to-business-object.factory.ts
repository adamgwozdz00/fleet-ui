import {ImportDataFactory} from "../importer/import-data.factory";
import {CSV, CSVRow} from "../importer/csv";
import {CSVConvertStrategy} from "./csv-convert-strategy";

export class CsvToBusinessObjectFactory<T> implements ImportDataFactory<CSV, T[]> {

  constructor(private valid_keys: string[],
              private strategy: CSVConvertStrategy<T>) {
  }

  create(data: CSV): T[] {
    const keys = data.headerRow.cells
    this.vetoIfKeysInvalid(keys);
    const keysMap = this.toKeysMap(keys);

    return this.strategy.convert(this.removeEmptyRows(data.rows, keysMap), keysMap);
  }

  private toKeysMap(keys: string[]): Map<string, number> {
    const keysMap = new Map<string, number>();

    for (let i = 0; i < keys.length; i++) {
      keysMap.set(keys[i], i);
    }

    return keysMap;
  }

  private vetoIfKeysInvalid(keys: string[]) {
    if (this.valid_keys.length != keys.length) {
      throw Error("Incorrect csv header.");
    }

    this.valid_keys.forEach(key => {
      if (keys.find(k => k === key) == undefined) {
        throw Error("Incorrect csv header.");
      }
    })
  }

  private removeEmptyRows(rows: CSVRow[], keyMap: Map<string, number>) {
    return rows.filter(row => {
      for (let idx of keyMap.values()) {
        if (!row.cells[idx]) {
          return false;
        }
      }
      return true;
    });
  }
}
