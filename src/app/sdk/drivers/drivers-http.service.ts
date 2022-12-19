import {DriversService} from "./drivers.service";
import {CreateDriverDTO, DriverHistoryDTO, DriverResponse, DriversDTO} from "./driver.dto";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiUrl} from "../../http/api-url";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class DriversHttpService implements DriversService {

  private static API_URL = "drivers";

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Promise<DriversDTO> {
    return this.http.get<DriversDTO>(ApiUrl
    .builder(DriversHttpService.API_URL)
    .build()
      .endpoint).toPromise();
  }

  getDriverHistory(driverId: number): Promise<DriverHistoryDTO> {
    return this.http.get<DriverHistoryDTO>(ApiUrl
    .builder(DriversHttpService.API_URL)
    .withPathVariable(driverId)
    .build().endpoint).toPromise();
  }

  createDriver(driver: CreateDriverDTO): Promise<DriverResponse> {
    return this.http.post<DriverResponse>(ApiUrl
    .builder(DriversHttpService.API_URL).build().endpoint, driver)
    .toPromise();
  }

  promoteDriver(driverId: number): Promise<DriverResponse> {
    return this.http.patch<DriverResponse>(ApiUrl
    .builder(DriversHttpService.API_URL)
    .withAdditionalSegment('promotions')
    .build().endpoint, {}, {
      params: new HttpParams().append("driverId", driverId)
    })
    .toPromise();
  }

  updateSeniority(driverId: number): Promise<DriverResponse> {
    return this.http.patch<DriverResponse>(ApiUrl
    .builder(DriversHttpService.API_URL)
    .withAdditionalSegment('promotions')
    .build().endpoint, {}, {
      params: new HttpParams().append("driverId", driverId)
    })
    .toPromise();
  }

  async delete(driverId: number): Promise<void> {
    await this.http.delete<DriverHistoryDTO>(ApiUrl
    .builder(DriversHttpService.API_URL)
    .withPathVariable(driverId)
    .build().endpoint).toPromise();
  }
}
