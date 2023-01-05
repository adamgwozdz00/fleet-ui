import {InputFileImporter} from "../importer/input-file-importer";
import {VehicleHttpService} from "../vehicles/vehicle-http.service";
import {CSV} from "../importer/csv";
import {CsvToVehicleFactory} from "./csv-to-vehicle.factory";

export class VehicleCsvImporter implements InputFileImporter {
  constructor(private service: VehicleHttpService,
              private factory: CsvToVehicleFactory) {
  }

  import(data: string | ArrayBuffer): Promise<void> {
    return Promise.all(this.factory.create(CSV.of(data as string)).map(vehicle => this.service.create(vehicle))).then();
  }

}
