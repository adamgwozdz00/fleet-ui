import {Injectable} from "@angular/core";
import {ApiUrl} from "../../http/api-url";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'any'})
export class UserDeletionService {

  constructor(private readonly http: HttpClient) {
  }

  public async deleteUser(userId: number): Promise<void> {
    await this.http.delete<void>(
      ApiUrl.builder("remove")
      .withPathVariable(userId)
      .build().endpoint).toPromise()

    await this.http.delete<void>(
      ApiUrl.builder("users")
      .withPathVariable(userId)
      .build().endpoint).toPromise()
  }
}
