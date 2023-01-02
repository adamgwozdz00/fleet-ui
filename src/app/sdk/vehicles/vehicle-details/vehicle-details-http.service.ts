import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DriversDetailsDTO} from "./drivers-details.dto";
import {ApiUrl} from "../../../http/api-url";
import {OverviewsDetailsDTO} from "./overviews-details.dto";
import {InsurancesDetailsDTO} from "./insurances-details.dto";
import {RefuelsDetailsDTO} from "./refuel-details.dto";
import {VehicleStateDetailsDTO} from "./vehicle-state-details.dto";
import {RepairDetailsDTO} from "./repair-details.dto";

@Injectable({providedIn: "root"})
export class VehicleDetailsHttpService {
  static API_URL = "vehicles/detalis";

  constructor(private readonly http: HttpClient) {
  }

  public getDriversHistory(vehicleId: string): Promise<DriversDetailsDTO> {
    return this.http
    .get<DriversDetailsDTO>(
      ApiUrl.builder(VehicleDetailsHttpService.API_URL)
      .withAdditionalSegment("drivers")
      .withPathVariable(vehicleId)
      .build().endpoint
    )
    .toPromise();
  }

  public getOverviewHistory(
    vehicleId: string,
    onlyActual: boolean = false
  ): Promise<OverviewsDetailsDTO> {
    return this.http
    .get<OverviewsDetailsDTO>(
      ApiUrl.builder(VehicleDetailsHttpService.API_URL)
      .withAdditionalSegment("overviews")
      .withPathVariable(vehicleId)
      .build().endpoint,
      {params: new HttpParams().append("onlyActual", onlyActual)}
    )
    .toPromise();
  }

  public getInsuranceHistory(
    vehicleId: string,
    onlyActual: boolean = false
  ): Promise<InsurancesDetailsDTO> {
    return this.http
    .get<InsurancesDetailsDTO>(
      ApiUrl.builder(VehicleDetailsHttpService.API_URL)
      .withAdditionalSegment("insurances")
      .withPathVariable(vehicleId)
      .build().endpoint,
      {params: new HttpParams().append("onlyActual", onlyActual)}
    )
    .toPromise();
  }

  public getRefuelHistory(
    vehicleId: string,
  ): Promise<RefuelsDetailsDTO> {
    return this.http
    .get<RefuelsDetailsDTO>(
      ApiUrl.builder(VehicleDetailsHttpService.API_URL)
      .withAdditionalSegment("fuels")
      .withPathVariable(vehicleId)
      .build().endpoint)
    .toPromise();
  }

  public getVehicleStateHistory(
    vehicleId: string,
  ): Promise<VehicleStateDetailsDTO> {
    return this.http
    .get<VehicleStateDetailsDTO>(
      ApiUrl.builder(VehicleDetailsHttpService.API_URL)
      .withAdditionalSegment("states")
      .withPathVariable(vehicleId)
      .build().endpoint)
    .toPromise();
  }

  public getRepairHistory(
    vehicleId: string,
    onlyLastRepair: boolean = false
  ): Promise<RepairDetailsDTO> {
    return this.http
    .get<RepairDetailsDTO>(
      ApiUrl.builder(VehicleDetailsHttpService.API_URL)
      .withAdditionalSegment("repairs")
      .withPathVariable(vehicleId)
      .build().endpoint,
      {params: new HttpParams().append("onlyLastRepair", onlyLastRepair)})
    .toPromise();
  }
}
