import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthResultDTO } from "./auth-result.dto";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class UserRoleStorage {
  private userRole: string = "";

  constructor(private readonly http: HttpClient) {}

  getOrRequest(): Promise<string> {
    if (this.userRole == "") {
      return this.http
        .get<AuthResultDTO>(environment.apiHost + "roles")
        .toPromise()
        .then((result) => result.role)
        .then((role) => {
          this.userRole = role;
          return this.userRole;
        });
    }
    return Promise.resolve(this.userRole);
  }

  clear() {
    this.userRole = "";
  }
}
