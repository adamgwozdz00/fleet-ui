import {ImportDataFactory} from "../importer/import-data.factory";
import {CreateVehicleDTO} from "../vehicles/vehicle.dto";
import {CSV} from "../importer/csv";

export class CsvToVehicleFactory implements ImportDataFactory<CSV, CreateVehicleDTO[]> {

  private static VALID_KEYS = ['make', 'model', 'productionYear', 'vinNumber', 'fuelType'];

  create(data: CSV): CreateVehicleDTO[] {
    const keys = data.headerRow.cells

    this.vetoIfKeysInvalid(keys);

    const keysMap = this.toKeysMap(keys);

    return data.rows.map(row => ({
      make: row.cells[keysMap.get('make')],
      model: row.cells[keysMap.get('model')],
      productionYear: Number(row.cells[keysMap.get('productionYear')]),
      vinNumber: row.cells[keysMap.get('vinNumber')],
      fuelType: row.cells[keysMap.get('fuelType')],
    }));

  }

  private toKeysMap(keys: string[]): Map<string, number> {
    const keysMap = new Map<string, number>();

    for (let i = 0; i < keys.length; i++) {
      keysMap.set(keys[i], i);
    }

    return keysMap;
  }

  private vetoIfKeysInvalid(keys: string[]) {
    if (CsvToVehicleFactory.VALID_KEYS.length != keys.length) {
      throw Error("Incorrect csv header.");
    }

    CsvToVehicleFactory.VALID_KEYS.forEach(key => {
      if (keys.find(k => k === key) == undefined) {
        throw Error("Incorrect csv header.");
      }
    })
  }
}
