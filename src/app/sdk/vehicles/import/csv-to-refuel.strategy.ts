import {CSVConvertStrategy} from "../../csv/csv-convert-strategy";
import {RefuelDTO} from "../vehicle.dto";
import {CSVRow} from "../../importer/csv";

export class CsvToRefuelStrategy implements CSVConvertStrategy<RefuelDTO> {
  convert(csvRows: CSVRow[], keysMap: Map<string, number>): RefuelDTO[] {
    return csvRows.map(row => ({
      vehicleId: row.cells[keysMap.get('vehicleId')],
      data: {
        cost: Number(row.cells[keysMap.get('cost')]),
        liters: Number(row.cells[keysMap.get('liters')]),
        time: new Date(row.cells[keysMap.get('time')])
      }
    }));
  }

}
