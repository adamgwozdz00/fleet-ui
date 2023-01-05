import {CSVConvertStrategy} from "../../csv/csv-convert-strategy";
import {CreateVehicleDTO} from "../vehicle.dto";
import {CSVRow} from "../../importer/csv";


export class CSVToCreateVehicleStrategy implements CSVConvertStrategy<CreateVehicleDTO> {
  convert(csvRows: CSVRow[], keysMap: Map<string, number>): CreateVehicleDTO[] {
    return csvRows.map(row => ({
      make: row.cells[keysMap.get('make')],
      model: row.cells[keysMap.get('model')],
      productionYear: Number(row.cells[keysMap.get('productionYear')]),
      vinNumber: row.cells[keysMap.get('vinNumber')],
      fuelType: row.cells[keysMap.get('fuelType')],
    }));

  }

}
