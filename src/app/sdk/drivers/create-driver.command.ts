import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {
  CreationForm,
  InputCreationFormControl,
  SelectCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {DriversHttpService} from "./drivers-http.service";
import {FormControl, Validators} from "@angular/forms";

export class CreateDriverCommand extends CreationCommand {

  constructor(private driverService: DriversHttpService) {
    super(new CreationForm([
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
      new InputCreationFormControl({
        key: "seniority",
        control: new FormControl(0, Validators.required)
      }),
      new SelectCreationFormControl({
        key: "title",
        control: new FormControl("", Validators.required)
      }, ["JUNIOR", "SENIOR"])
    ]))
  }

  create() {
    const values = this.form().value;
    return this.driverService
    .createDriver({
      lastName: values.lastName,
      firstName: values.firstName,
      seniorityInYears: values.seniority,
    })
  }

}
