import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegistrationDTO} from "./registration.dto";
import {RegistrationResult} from "./registration-result";
import {ApiUrl} from "../../http/api-url";

@Injectable({providedIn: "root"})
export class RegistrationService {

  static API_URL = "register"

  constructor(private readonly http: HttpClient) {
  }

  register(registration: RegistrationDTO): Promise<RegistrationResult> {
    return this.http.post<RegistrationResult>(
      ApiUrl.builder(RegistrationService.API_URL).build().endpoint,
      registration
    ).toPromise();
  }
}
