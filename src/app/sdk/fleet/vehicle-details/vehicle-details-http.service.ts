import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DriversDetailsDTO} from "./drivers-details.dto";
import {
  vehiclesDriverHistoryApiUrl,
  vehiclesInsuranceHistoryApiUrl,
  vehiclesOverviewsHistoryApiUrl
} from "../../../http/api-url";
import {OverviewsDetailsDTO} from "./overviews-details.dto";
import {InsurancesDetailsDTO} from "./insurances-details.dto";

@Injectable({providedIn: 'root'})
export class VehicleDetailsHttpService {
  constructor(private readonly http: HttpClient) {
  }

  public getDriversHistory(vehicleId: string): Promise<DriversDetailsDTO> {
    return this.http.get<DriversDetailsDTO>(vehiclesDriverHistoryApiUrl(vehicleId).url).toPromise();
  }

  public getOverviewHistory(vehicleId: string, onlyActual: boolean = false): Promise<OverviewsDetailsDTO> {
    return this.http.get<OverviewsDetailsDTO>(vehiclesOverviewsHistoryApiUrl(vehicleId).url, {params: new HttpParams().append("onlyActual", onlyActual)}).toPromise();
  }

  public getInsuranceHistory(vehicleId: string, onlyActual: boolean = false): Promise<InsurancesDetailsDTO> {
    return this.http.get<InsurancesDetailsDTO>(vehiclesInsuranceHistoryApiUrl(vehicleId).url, {params: new HttpParams().append("onlyActual", onlyActual)}).toPromise();
  }
}
