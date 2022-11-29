import {Component, Input} from '@angular/core';
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {Title} from "../../../common/fleet-table/title";
import {
  VehicleDetailsHttpService
} from "../../../sdk/fleet/vehicle-details/vehicle-details-http.service";
import {OverviewsDetailsDTO} from "../../../sdk/fleet/vehicle-details/overviews-details.dto";
import {Column, IdColumn} from "../../../common/fleet-table/column";
import {HistoryComponent} from "../history.component";


@Component({
  selector: 'overviews-history',
  templateUrl: './overviews-history.component.html',
  styleUrls: ['./overviews-history.component.css']
})
export class OverviewsHistoryComponent extends HistoryComponent<OverviewsDetailsDTO> {

  @Input()
  current: boolean = false;


  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService) {
    super(new Title("Overviews"),
      HeaderRow.createForColumnTitles(["id", "name", "cost", "expires at"]))
  }

  load(vehicleId: string): Promise<OverviewsDetailsDTO> {
    return this.vehicleDetailsService.getOverviewHistory(vehicleId, this.current);
  }

  map(details: OverviewsDetailsDTO): Row[] {
    return details.overviewDetails.map(details =>
      new Row(
        [new IdColumn(details.id),
          new Column(details.overviewName),
          new Column(details.overviewCost),
          new Column(details.expirationDate)]));
  }
}


