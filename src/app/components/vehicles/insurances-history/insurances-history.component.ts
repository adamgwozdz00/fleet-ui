import {Component, Input} from '@angular/core';
import {HistoryComponent} from "../../../common/details/history.component";
import {InsurancesDetailsDTO} from "../../../sdk/vehicles/vehicle-details/insurances-details.dto";
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {
  VehicleDetailsHttpService
} from "../../../sdk/vehicles/vehicle-details/vehicle-details-http.service";
import {Title} from 'src/app/common/fleet-table/title';
import {Column} from "../../../common/fleet-table/column";
import {CreateInsuranceCommand} from "../../../sdk/vehicles/create-insurance.command";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {DateFormatter} from "../../../common/fleet-table/column-formatter";

@Component({
  selector: 'insurances-history',
  templateUrl: './insurances-history.component.html',
  styleUrls: ['./insurances-history.component.css']
})
export class InsurancesHistoryComponent extends HistoryComponent<InsurancesDetailsDTO> {

  @Input()
  current: boolean = false;

  createCommand: CreateInsuranceCommand
  isOpenAdditionSidebar: boolean = false;

  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService,
              private readonly vehicleHttpService: VehicleHttpService) {
    super(new Title("Insurance"), HeaderRow.createForColumnTitles(["id", "name", "cost", "expires at"]));
    this.createCommand = new CreateInsuranceCommand(this.vehicleHttpService, undefined);
  }


  load(vehicleId: string): Promise<InsurancesDetailsDTO> {
    return this.vehicleDetailsService.getInsuranceHistory(vehicleId, this.current);
  }

  map(details: InsurancesDetailsDTO): Row[] {
    return details.insuranceDetails.map(
      it => new Row([
        new Column(it.id),
        new Column(it.insuranceName),
        new Column(it.insuranceCost),
        new Column(it.insuranceExpirationDate, new DateFormatter())
      ])
    );
  }

  openAdditionSidebar() {
    this.createCommand = new CreateInsuranceCommand(this.vehicleHttpService, this.objectId);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

}
