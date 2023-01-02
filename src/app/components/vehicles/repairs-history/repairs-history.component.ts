import {Component} from '@angular/core';
import {HistoryComponent} from "../../../common/details/history.component";
import {RepairDetailsDTO} from "../../../sdk/vehicles/vehicle-details/repair-details.dto";
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {
  VehicleDetailsHttpService
} from "../../../sdk/vehicles/vehicle-details/vehicle-details-http.service";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {Title} from "../../../common/fleet-table/title";
import {Column} from "../../../common/fleet-table/column";
import {DateTimeFormatter, EuroFormatter} from "../../../common/fleet-table/column-formatter";
import {CreateRepairCommand} from "../../../sdk/vehicles/create-repair.command";

@Component({
  selector: 'repairs-history',
  templateUrl: './repairs-history.component.html',
  styleUrls: ['./repairs-history.component.css']
})
export class RepairsHistoryComponent extends HistoryComponent<RepairDetailsDTO> {
  createCommand: CreateRepairCommand
  isOpenAdditionSidebar: boolean = false;

  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService,
              private readonly vehicleHttpService: VehicleHttpService) {
    super(new Title("Repairs"), HeaderRow.createForColumnTitles(["Service", "Title", "since", "to", "cost"]))
    this.createCommand = new CreateRepairCommand(vehicleHttpService, undefined);
  }


  load(objectId: any): Promise<RepairDetailsDTO> {
    return this.vehicleDetailsService.getRepairHistory(objectId);
  }

  map(details: RepairDetailsDTO): Row[] {
    return details.repairDetails.map(details => new Row([
      new Column(details.serviceName),
      new Column(details.title),
      new Column(details.startTime, new DateTimeFormatter()),
      new Column(details.finishTime, new DateTimeFormatter()),
      new Column(details.cost, new EuroFormatter())
    ]));
  }

  openAdditionSidebar() {
    this.createCommand = new CreateRepairCommand(this.vehicleHttpService, this.objectId);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

}
