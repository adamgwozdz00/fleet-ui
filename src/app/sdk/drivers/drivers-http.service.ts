import {DriversService} from "./drivers.service";
import {DriversDTO} from "./driver.dto";
import {HttpClient} from "@angular/common/http";
import {driversApiUrl} from "../../http/api-url";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class DriversHttpService implements DriversService {

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Promise<DriversDTO> {
    return this.http.get<DriversDTO>(driversApiUrl.url).toPromise();
  }

}
