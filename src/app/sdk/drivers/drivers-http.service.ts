import {DriversService} from "./drivers.service";
import {DriverHistoryDTO, DriversDTO} from "./driver.dto";
import {HttpClient} from "@angular/common/http";
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

}
