import {CSVToCreateVehicleStrategy} from "./csv-to-create-vehicle.strategy";
import {InputFileImporter} from "../../importer/input-file-importer";
import {VehicleHttpService} from "../vehicle-http.service";
import {CsvToBusinessObjectFactory} from "../../csv/csv-to-business-object.factory";
import {CSV} from "../../importer/csv";

export class VehicleCsvImporter implements InputFileImporter {
  constructor(private service: VehicleHttpService) {
  }

  import(data: string | ArrayBuffer): Promise<void> {
    const factory = new CsvToBusinessObjectFactory(['make', 'model', 'productionYear', 'vinNumber', 'fuelType'], new CSVToCreateVehicleStrategy())
    return Promise.all(factory.create(CSV.of(data as string)).map(vehicle => this.service.create(vehicle))).then();
  }

}
