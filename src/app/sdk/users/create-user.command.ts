import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  CreationForm,
  CreationFormControl,
  InputCreationFormControl,
  SelectCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {UserCreationService} from "./user-creation.service";


export class CreateUserCommand implements CreationCommand {

  private _form = new CreationForm([
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
  ]);

  constructor(private creationService: UserCreationService) {
  }

  create(): Promise<boolean> {
    const values = this._form.formGroup.value;
    return this.creationService.create({
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName,
      title: values.title,
      role: this.extractRole(values.role),
      password: values.password,
    });
  }

  form(): FormGroup<{ firstName: FormControl<string | null>; lastName: FormControl<string | null>; password: FormControl<string | null>; role: FormControl<string | null>; title: FormControl<string | null>; username: FormControl<string | null> }> {
    return this._form.formGroup;
  }

  controls(): CreationFormControl[] {
    return this._form.controls;
  }

  isCommandValid(): Boolean {
    return this._form.formGroup.valid;
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

