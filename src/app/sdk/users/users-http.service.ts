import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserData} from "./user-data";
import {ApiUrl} from "../../http/api-url";
import {UsersDataDTO} from "./users-data.dto";

@Injectable({providedIn: 'root'})
export class UsersHttpService {

  private static API_URL = "users"

  constructor(private readonly http: HttpClient) {
  }

  public getUserData(): Promise<UserData> {
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

  public async addVehicleToUser(vehicleId: number): Promise<void> {
    await this.http.patch<void>(
      ApiUrl.builder(UsersHttpService.API_URL)
      .withAdditionalSegment("vehicles")
      .withPathVariable(String(vehicleId))
      .build().endpoint, {}).toPromise()
  }

  public async deleteVehicleFromUser(vehicleId: number): Promise<void> {
    await this.http.delete<void>(
      ApiUrl.builder(UsersHttpService.API_URL)
      .withAdditionalSegment("vehicles")
      .withPathVariable(String(vehicleId))
      .build().endpoint, {}).toPromise()
  }
}
