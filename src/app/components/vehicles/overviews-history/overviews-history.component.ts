import {Component, Input} from '@angular/core';
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {Title} from "../../../common/fleet-table/title";
import {
  VehicleDetailsHttpService
} from "../../../sdk/vehicles/vehicle-details/vehicle-details-http.service";
import {OverviewsDetailsDTO} from "../../../sdk/vehicles/vehicle-details/overviews-details.dto";
import {Column} from "../../../common/fleet-table/column";
import {HistoryComponent} from "../../../common/details/history.component";
import {CreateOverviewCommand} from "../../../sdk/vehicles/create-overview.command";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {DateFormatter} from "../../../common/fleet-table/column-formatter";


@Component({
  selector: 'overviews-history',
  templateUrl: './overviews-history.component.html',
  styleUrls: ['./overviews-history.component.css']
})
export class OverviewsHistoryComponent extends HistoryComponent<OverviewsDetailsDTO> {

  @Input()
  current: boolean = false;

  createCommand: CreateOverviewCommand
  isOpenAdditionSidebar: boolean = false;


  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService,
              private readonly vehicleHttpService: VehicleHttpService) {
    super(new Title("Overviews"),
      HeaderRow.createForColumnTitles(["id", "name", "cost", "expires at"]))
    this.createCommand = new CreateOverviewCommand(this.vehicleHttpService, this.objectId);
  }

  load(vehicleId: string): Promise<OverviewsDetailsDTO> {
    return this.vehicleDetailsService.getOverviewHistory(vehicleId, this.current);
  }

  map(details: OverviewsDetailsDTO): Row[] {
    return details.overviewDetails.map(details =>
      new Row(
        [new Column(details.id),
          new Column(details.overviewName),
          new Column(details.overviewCost),
          new Column(details.expirationDate, new DateFormatter())]));
  }

  openAdditionSidebar() {
    this.createCommand = new CreateOverviewCommand(this.vehicleHttpService, this.objectId);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

}


