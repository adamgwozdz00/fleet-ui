import {Component, Input, OnChanges} from '@angular/core';
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {
  VehicleDetailsHttpService
} from "../../../sdk/fleet/vehicle-details/vehicle-details-http.service";
import {Title} from "../../../common/fleet-table/title";
import {DriversDetailsDTO} from "../../../sdk/fleet/vehicle-details/drivers-details.dto";
import {Column} from "../../../common/fleet-table/column";

@Component({
  selector: 'vehicle-drivers-history',
  templateUrl: './drivers-history.component.html',
  styleUrls: ['./drivers-history.component.css']
})
export class DriversHistoryComponent implements OnChanges {

  @Input()
  vehicleId: string = "";

  headerRow: HeaderRow = HeaderRow.createForColumnTitles(["id", "kilometers", "last name", "time"])
  rows: Row[] = [];
  title: Title = new Title("Drivers History");
  private rowMapper = new DriversHistoryRowMapper();

  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService) {
  }


  ngOnChanges(): void {
    this.vehicleDetailsService.getDriversHistory(this.vehicleId)
    .then(driversHistory => this.rows = this.rowMapper.map(driversHistory))
  }
}

class DriversHistoryRowMapper {
  map(driversHistoryDTO: DriversDetailsDTO): Row[] {
    return driversHistoryDTO.driverDetails.map(details => new Row(
      [new Column(details.id),
        new Column(details.kilometers),
        new Column(details.lastName),
        new Column(details.time)]));
  }
}
