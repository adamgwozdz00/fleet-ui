import {Component} from '@angular/core';
import {HistoryComponent} from "../../../common/details/history.component";
import {RefuelsDetailsDTO} from "../../../sdk/vehicles/vehicle-details/refuel-details.dto";
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {Title} from "../../../common/fleet-table/title";
import {
  VehicleDetailsHttpService
} from "../../../sdk/vehicles/vehicle-details/vehicle-details-http.service";
import {Column} from "../../../common/fleet-table/column";
import {CreateRefuelCommand} from "../../../sdk/vehicles/create-refuel.command";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {DateTimeFormatter, EuroFormatter} from "../../../common/fleet-table/column-formatter";
import {FuelCsvImporter} from "../../../sdk/vehicles/import/fuel-csv-importer";

@Component({
  selector: 'refuel-history',
  templateUrl: './refuel-history.component.html',
  styleUrls: ['./refuel-history.component.css']
})
export class RefuelHistoryComponent extends HistoryComponent<RefuelsDetailsDTO> {

  createCommand: CreateRefuelCommand
  importer: FuelCsvImporter
  isOpenAdditionSidebar: boolean = false;

  constructor(private readonly vehicleDetailsHttpService: VehicleDetailsHttpService,
              private readonly vehicleService: VehicleHttpService) {
    super(new Title("Refueling"), HeaderRow.createForColumnTitles(["cost", "liters", "time"]));
    this.createCommand = new CreateRefuelCommand(vehicleService, undefined);
    this.importer = new FuelCsvImporter(vehicleService);
  }

  ngOnInit(): void {
  }

  load(objectId: any): Promise<RefuelsDetailsDTO> {
    return this.vehicleDetailsHttpService.getRefuelHistory(objectId);
  }

  map(details: RefuelsDetailsDTO): Row[] {
    return details.refuelDetails.map(details =>
      new Row([
        new Column(details.cost, new EuroFormatter()),
        new Column(details.liters),
        new Column(details.time, new DateTimeFormatter())
      ]));
  }

  openAdditionSidebar() {
    this.createCommand = new CreateRefuelCommand(this.vehicleService, this.objectId);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

}
