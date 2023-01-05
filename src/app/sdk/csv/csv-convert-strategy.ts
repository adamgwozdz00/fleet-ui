import {CSVRow} from "../importer/csv";

export interface CSVConvertStrategy<T> {
  convert(csvRows: CSVRow[], keysMap: Map<string, number>): T[]
}
