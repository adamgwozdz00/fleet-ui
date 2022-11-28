import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DriversDetailsDTO} from "./drivers-details.dto";
import {vehiclesDriverHistoryApiUrl} from "../../../http/api-url";

@Injectable({providedIn: 'root'})
export class VehicleDetailsHttpService {
  constructor(private readonly http: HttpClient) {
  }

  public getDriversHistory(vehicleId: string): Promise<DriversDetailsDTO> {
    return this.http.get<DriversDetailsDTO>(vehiclesDriverHistoryApiUrl(vehicleId).url).toPromise();
  }
}
