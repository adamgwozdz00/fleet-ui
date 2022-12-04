import {Injectable} from "@angular/core";
import {CreateVehicleDTO, VehiclesDTO} from "./vehicle.dto";
import {VehicleService} from "./vehicle.service";
import {HttpClient} from "@angular/common/http";
import {vehiclesApiUrl} from "../../http/api-url";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class VehicleHttpService implements VehicleService {

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Promise<VehiclesDTO> {
    return this.http.get<VehiclesDTO>(vehiclesApiUrl.url).toPromise();
  }

  create(body: CreateVehicleDTO): Promise<void> {
    return this.http.post<void>(vehiclesApiUrl.url, body).toPromise()
  }


}
