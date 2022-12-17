import {Injectable} from "@angular/core";
import {
  CreateVehicleDTO,
  UpdateInsuranceDTO,
  UpdateOverviewDTO,
  UpdateVehicleStateDTO,
  VehiclesDTO
} from "./vehicle.dto";
import {VehicleService} from "./vehicle.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiUrl} from "../../http/api-url";
import {FuelTypes} from "./fuel-types";


@Injectable({providedIn: 'root'})
export class VehicleHttpService implements VehicleService {

  private static API_URL = "vehicles"

  constructor(private readonly http: HttpClient) {
  }

  getAll(userId: number = undefined, onlyAvailable: boolean = false): Promise<VehiclesDTO> {
    let params = new HttpParams();

    if (userId) {
      params = params.append('userId', userId);
    }

    if (onlyAvailable) {
      params = params.append('withoutAssigment', onlyAvailable);
    }


    return this.http.get<VehiclesDTO>(ApiUrl.builder(VehicleHttpService.API_URL)
    .build().endpoint, {params: params}).toPromise();
  }

  getAllAvailableVehicles(): Promise<VehiclesDTO> {
    return this.http.get<VehiclesDTO>(ApiUrl.builder(VehicleHttpService.API_URL)
    .build().endpoint).toPromise();
  }

  create(body: CreateVehicleDTO): Promise<void> {
    return this.http.post<void>(ApiUrl.builder(VehicleHttpService.API_URL)
    .build().endpoint, body).toPromise();
  }

  getFuelTypes(): Promise<FuelTypes> {
    return this.http.get<FuelTypes>(ApiUrl.builder(VehicleHttpService.API_URL)
    .withAdditionalSegment("fuels")
    .build().endpoint).toPromise();
  }

  async updateInsurance(insurance: UpdateInsuranceDTO): Promise<void> {
    await this.http.put<void>(
      ApiUrl.builder(VehicleHttpService.API_URL)
      .withPathVariable(insurance.vehicleId)
      .withAdditionalSegment("insurances")
      .build().endpoint,
      insurance.data
    ).toPromise();
  }

  async updateOverview(overview: UpdateOverviewDTO): Promise<void> {
    await this.http.put<void>(
      ApiUrl.builder(VehicleHttpService.API_URL)
      .withPathVariable(overview.vehicleId)
      .withAdditionalSegment("overviews")
      .build().endpoint,
      overview.data
    ).toPromise();
  }

  async updateState(state: UpdateVehicleStateDTO): Promise<void> {
    await this.http.put<void>(
      ApiUrl.builder(VehicleHttpService.API_URL)
      .withPathVariable(state.vehicleId)
      .withAdditionalSegment("states")
      .build().endpoint,
      state.data
    ).toPromise();
  }

}
