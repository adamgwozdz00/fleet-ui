import {Injectable} from "@angular/core";
import {
  CreateVehicleDTO,
  RefuelDTO,
  RepairDTO,
  UpdateInsuranceDTO,
  UpdateOverviewDTO,
  UpdateVehicleStateDTO,
  VehiclesDTO
} from "./vehicle.dto";
import {VehicleService} from "./vehicle.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiUrl} from "../../http/api-url";
import {FuelTypes} from "./fuel-types";
import {Availability} from "./availability";


@Injectable({providedIn: 'root'})
export class VehicleHttpService implements VehicleService {

  private static API_URL = "vehicles"

  constructor(private readonly http: HttpClient) {
  }

  async delete(vehicleId: string): Promise<void> {
    await this.http.delete<VehiclesDTO>(ApiUrl.builder(VehicleHttpService.API_URL)
    .withPathVariable(vehicleId)
    .build().endpoint,).toPromise();
  }

  getAll(vehicleFilters: VehicleFilters = {}): Promise<VehiclesDTO> {
    let params = new HttpParams();

    if (vehicleFilters.userId) {
      params = params.append('userId', vehicleFilters.userId);
    }

    if (vehicleFilters.availability) {
      params = params.append('availability', vehicleFilters.availability);
    }


    return this.http.get<VehiclesDTO>(ApiUrl.builder(VehicleHttpService.API_URL)
    .build().endpoint, {params: params}).toPromise();
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

  async refuel(refuel: RefuelDTO): Promise<void> {
    await this.http.put<void>(
      ApiUrl.builder(VehicleHttpService.API_URL)
      .withPathVariable(refuel.vehicleId)
      .withAdditionalSegment("fuels")
      .build().endpoint,
      refuel.data
    ).toPromise();
  }

  async updateRepairs(repair: RepairDTO) {
    await this.http.put<void>(
      ApiUrl.builder(VehicleHttpService.API_URL)
      .withPathVariable(repair.vehicleId)
      .withAdditionalSegment("repairs")
      .build().endpoint,
      repair.data
    ).toPromise();
  }
}

export interface VehicleFilters {
  userId?: number,
  availability?: Availability
}
