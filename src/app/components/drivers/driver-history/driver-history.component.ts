import {Component} from '@angular/core';
import {HistoryComponent} from "../../../common/details/history.component";
import {DriverHistoryDTO} from "../../../sdk/drivers/driver.dto";
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {Title} from "../../../common/fleet-table/title";
import {Column, IdColumn} from "../../../common/fleet-table/column";
import {DriversHttpService} from "../../../sdk/drivers/drivers-http.service";

@Component({
  selector: 'driver-history',
  templateUrl: './driver-history.component.html',
  styleUrls: ['./driver-history.component.css']
})
export class DriverHistoryComponent extends HistoryComponent<DriverHistoryDTO> {

  constructor(private readonly driversService: DriversHttpService,) {
    super(new Title("Driver History"), HeaderRow.createForColumnTitles(["vehicle id", "make", "model", "kilometers", "liters", "time"]))
  }

  load(driverId: number): Promise<DriverHistoryDTO> {
    if (driverId) {
      return this.driversService.getDriverHistory(driverId);
    }
    return Promise.resolve({history: []});
  }

  map(details: DriverHistoryDTO): Row[] {
    return details.history.map(
      h => new Row([
        new IdColumn(h.vehicleId),
        new Column(h.vehicleMake),
        new Column(h.vehicleModel),
        new Column(h.kilometers),
        new Column(h.liters),
        new Column(h.time)]
      )
    )
  }

}
