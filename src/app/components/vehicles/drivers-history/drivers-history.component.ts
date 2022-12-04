import {Component} from '@angular/core';
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {
  VehicleDetailsHttpService
} from "../../../sdk/vehicles/vehicle-details/vehicle-details-http.service";
import {Title} from "../../../common/fleet-table/title";
import {DriversDetailsDTO} from "../../../sdk/vehicles/vehicle-details/drivers-details.dto";
import {Column} from "../../../common/fleet-table/column";
import {HistoryComponent} from "../history.component";

@Component({
  selector: 'vehicle-drivers-history',
  templateUrl: './drivers-history.component.html',
  styleUrls: ['./drivers-history.component.css']
})
export class DriversHistoryComponent extends HistoryComponent<DriversDetailsDTO> {

  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService) {
    super(new Title("Drivers History"),
      HeaderRow.createForColumnTitles(["id", "kilometers", "last name", "time"]))
  }

  load(vehicleId: string): Promise<DriversDetailsDTO> {
    return this.vehicleDetailsService.getDriversHistory(vehicleId);
  }

  map(details: DriversDetailsDTO): Row[] {
    return details.driverDetails.map(details => new Row(
      [new Column(details.id),
        new Column(details.kilometers),
        new Column(details.lastName),
        new Column(details.time)]));
  }

}

