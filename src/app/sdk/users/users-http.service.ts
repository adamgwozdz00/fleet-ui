import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserData} from "./user-data";
import {ApiUrl} from "../../http/api-url";
import {UsersDataDTO} from "./users-data.dto";
import {UserVehicleDTO} from "./user-vehicle.dto";

@Injectable({providedIn: 'root'})
export class UsersHttpService {

  private static API_URL = "users"

  constructor(private readonly http: HttpClient) {
  }

  public getUserRoutesAndCompanyName(): Promise<UserData> {
    return this.http.get<UserData>(
      ApiUrl.builder(UsersHttpService.API_URL)
      .withAdditionalSegment("self")
      .build().endpoint
    ).toPromise();
  }

  public getAllUsers(): Promise<UsersDataDTO> {
    return this.http.get<UsersDataDTO>(
      ApiUrl.builder(UsersHttpService.API_URL).build().endpoint
    ).toPromise();
  }

  public async createCompanyUser(userId: number): Promise<void> {
    await this.http.post<void>(ApiUrl.builder(UsersHttpService.API_URL).build().endpoint, {userId: userId}).toPromise()
  }

  public async addVehicleToUser(userVehicle: UserVehicleDTO): Promise<void> {
    let params = new HttpParams().append("vehicleId", userVehicle.vehicleId);

    if (userVehicle.userId) {
      params = params.append("userId", userVehicle.userId);
    }

    await this.http.patch<void>(
      ApiUrl.builder(UsersHttpService.API_URL)
      .withAdditionalSegment("vehicles")
      .build().endpoint, {},{params: params}).toPromise()
  }

  public async deleteVehicleFromUser(userVehicle: UserVehicleDTO): Promise<void> {
    let params = new HttpParams().append("vehicleId", userVehicle.vehicleId);

    if (userVehicle.userId) {
      params = params.append("userId", userVehicle.userId);
    }

    await this.http.delete<void>(
      ApiUrl.builder(UsersHttpService.API_URL)
      .withAdditionalSegment("vehicles")
      .build().endpoint, {params: params}).toPromise()
  }
}
