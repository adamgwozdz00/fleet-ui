import {Component, Input} from '@angular/core';
import {HistoryComponent} from "../history.component";
import {InsurancesDetailsDTO} from "../../../sdk/fleet/vehicle-details/insurances-details.dto";
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {
  VehicleDetailsHttpService
} from "../../../sdk/fleet/vehicle-details/vehicle-details-http.service";
import {Title} from 'src/app/common/fleet-table/title';
import {Column, IdColumn} from "../../../common/fleet-table/column";

@Component({
  selector: 'insurances-history',
  templateUrl: './insurances-history.component.html',
  styleUrls: ['./insurances-history.component.css']
})
export class InsurancesHistoryComponent extends HistoryComponent<InsurancesDetailsDTO> {

  @Input()
  current: boolean = false;

  constructor(private readonly vehicleDetailsService: VehicleDetailsHttpService) {
    super(new Title("Insurance"), HeaderRow.createForColumnTitles(["id", "name", "cost", "expires at"]));
  }


  load(vehicleId: string): Promise<InsurancesDetailsDTO> {
    return this.vehicleDetailsService.getInsuranceHistory(vehicleId, this.current);
  }

  map(details: InsurancesDetailsDTO): Row[] {
    return details.insuranceDetails.map(
      it => new Row([
        new IdColumn(it.id),
        new Column(it.insuranceName),
        new Column(it.insuranceCost),
        new Column(it.expirationDate)
      ])
    );
  }

}
