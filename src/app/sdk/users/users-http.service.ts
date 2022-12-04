import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserData} from "./user-data";
import {usersApiUrl} from "../../http/api-url";

@Injectable({providedIn: 'root'})
export class UsersHttpService {
  constructor(private readonly http: HttpClient) {
  }

  public getUserData() : Promise<UserData>{
    return this.http.get<UserData>(usersApiUrl.url).toPromise();
  }
}
