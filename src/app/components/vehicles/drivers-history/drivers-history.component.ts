import {Component} from '@angular/core';
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {
  VehicleDetailsHttpService
} from "../../../sdk/vehicles/vehicle-details/vehicle-details-http.service";
import {Title} from "../../../common/fleet-table/title";
import {DriversDetailsDTO} from "../../../sdk/vehicles/vehicle-details/drivers-details.dto";
import {Column} from "../../../common/fleet-table/column";
import {HistoryComponent} from "../../../common/details/history.component";
import {CreateVehicleStateCommand} from "../../../sdk/vehicles/create-vehicle-state.command";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {DriversHttpService} from "../../../sdk/drivers/drivers-http.service";
import {DateTimeFormatter} from "../../../common/fleet-table/column-formatter";

@Component({
  selector: 'vehicle-drivers-history',
  templateUrl: './drivers-history.component.html',
  styleUrls: ['./drivers-history.component.css']
})
export class DriversHistoryComponent extends HistoryComponent<DriversDetailsDTO> {

  createCommand: CreateVehicleStateCommand
  isOpenAdditionSidebar: boolean = false;
  drivers: number[] = []

  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService,
              private readonly vehicleHttpService: VehicleHttpService,
              private readonly driversHttpService: DriversHttpService) {
    super(new Title("Drivers History"),
      HeaderRow.createForColumnTitles(["id", "kilometers", "last name", "time"]))
    this.createCommand = new CreateVehicleStateCommand(vehicleHttpService, undefined);
  }

  load(vehicleId: string): Promise<DriversDetailsDTO> {
    this.driversHttpService.getAll().then(drivers => this.drivers = drivers.drivers.map(driver => driver.id))
    return this.vehicleDetailsService.getDriversHistory(vehicleId);
  }

  map(details: DriversDetailsDTO): Row[] {
    return details.driverDetails.map(details => new Row(
      [new Column(details.id),
        new Column(details.kilometers),
        new Column(details.lastName),
        new Column(details.time, new DateTimeFormatter())]));
  }

  openAdditionSidebar() {
    this.createCommand = new CreateVehicleStateCommand(this.vehicleHttpService, this.objectId, this.drivers);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

}

