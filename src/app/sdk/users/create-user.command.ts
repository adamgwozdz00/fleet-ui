import {FormControl, Validators} from "@angular/forms";
import {
  CreationForm,
  InputCreationFormControl,
  SelectCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {UserCreationService} from "./user-creation.service";


export class CreateUserCommand extends CreationCommand {

  constructor(private creationService: UserCreationService) {
    super(new CreationForm([
      new InputCreationFormControl({
        key: "username",
        control: new FormControl("", Validators.required)
      }),
      new InputCreationFormControl({
        title: "first name",
        key: "firstName",
        control: new FormControl("", Validators.required)
      }),
      new InputCreationFormControl({
        title: "last name",
        key: "lastName",
        control: new FormControl("", Validators.required)
      }),
      new SelectCreationFormControl({
        key: "title",
        control: new FormControl("", Validators.required)
      }, ["JUNIOR", "REGULAR", "SENIOR"]),
      new SelectCreationFormControl({
        key: "role",
        control: new FormControl("", Validators.required)
      }, ["USER", "ADMIN"]),
      new InputCreationFormControl({
        key: "password",
        control: new FormControl("", Validators.required)
      }),
    ]))
  }

  create(): Promise<boolean> {
    const values = this.form().value;
    return this.creationService.create({
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName,
      title: values.title,
      role: this.extractRole(values.role),
      password: values.password,
    });
  }

  private extractRole(role: string): "USER" | "ADMIN" {
    if (!role) {
      return "USER";
    }
    if (role.toUpperCase() === "ADMIN") {
      return "ADMIN";
    }
    return "USER";
  }


}

