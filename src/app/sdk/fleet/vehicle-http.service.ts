import {Injectable} from "@angular/core";
import {VehiclesDTO} from "./vehicle.dto";
import {VehicleService} from "./vehicle.service";
import {HttpClient} from "@angular/common/http";
import {vehiclesApiUrl} from "../../http/api-url";


@Injectable({providedIn: 'root'})
export class VehicleHttpService implements VehicleService {

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Promise<VehiclesDTO> {
    return this.http.get<VehiclesDTO>(vehiclesApiUrl.url).toPromise();
  }

}
