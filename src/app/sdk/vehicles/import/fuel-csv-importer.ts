import {InputFileImporter} from "../../importer/input-file-importer";
import {VehicleHttpService} from "../vehicle-http.service";
import {CsvToBusinessObjectFactory} from "../../csv/csv-to-business-object.factory";
import {CsvToRefuelStrategy} from "./csv-to-refuel.strategy";
import {CSV} from "../../importer/csv";


export class FuelCsvImporter implements InputFileImporter {

  constructor(private service: VehicleHttpService) {
  }

  import(data: string | ArrayBuffer): Promise<void> {
    const factory = new CsvToBusinessObjectFactory(['vehicleId', 'cost', 'liters', 'time'], new CsvToRefuelStrategy())
    return this.service.refuelMany(factory.create(CSV.of(data as string)));
  }
}
