import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthResultDTO} from "./auth-result.dto";

@Injectable({providedIn: 'root'})
export class UserRoleStorage {
  private userRole: string = "";

  constructor(private readonly http: HttpClient) {
  }

  getOrRequest(): Promise<string> {
    if (this.userRole == "") {
      return this.http.get<AuthResultDTO>("roles").toPromise()
      .then(result => result.role)
      .then(role => {
        this.userRole = role;
        return this.userRole;
      })
    }
    return Promise.resolve(this.userRole);
  }

  clear() {
    this.userRole = "";
  }

}
