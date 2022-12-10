import {Injectable} from "@angular/core";
import {UsersHttpService} from "../users/users-http.service";
import {RegistrationService} from "./registration.service";
import {RegistrationDTO} from "./registration.dto";

@Injectable({providedIn: 'root'})
export class AddNewUserService {
  constructor(private userService: UsersHttpService,
              private registrationService: RegistrationService) {
  }

  async addNewUser(registration: RegistrationDTO): Promise<boolean> {
    const result = await this.registrationService.register(registration);
    if (result.success) {
      await this.userService.createCompanyUser(result.userId)
    }
    return result.success;
  }
}
