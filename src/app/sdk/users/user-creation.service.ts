import {Injectable} from "@angular/core";
import {UsersHttpService} from "./users-http.service";
import {RegistrationDTO} from "../register/registration.dto";
import {RegistrationService} from "../register/registration.service";
import {CreationService} from "../../common/creation-sidebar/creation.service";


@Injectable({providedIn: 'root'})
export class UserCreationService implements CreationService<RegistrationDTO> {
  constructor(private userService: UsersHttpService,
              private registrationService: RegistrationService) {
  }

  async create(registration: RegistrationDTO): Promise<boolean> {
    const result = await this.registrationService.register(registration);
    if (result.success) {
      await this.userService.createCompanyUser(result.userId)
    }
    return result.success;
  }
}
