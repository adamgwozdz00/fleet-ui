import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {VehicleHttpService} from "./vehicle-http.service";
import {
  CreationForm,
  DateTimeCreationFormControl,
  InputCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {FormControl, Validators} from "@angular/forms";

export class CreateRepairCommand extends CreationCommand {
  constructor(private readonly service: VehicleHttpService,
              private readonly vehicleId: string) {
    super(new CreationForm([
      new InputCreationFormControl({
        key: "serviceName",
        title: "Service name",
        control: new FormControl("", Validators.required)
      }),
      new InputCreationFormControl({
        key: "title",
        control: new FormControl("", Validators.required)
      }),
      new DateTimeCreationFormControl({
        key: "since",
        control: new FormControl(Date.now(), Validators.required)
      }),
      new DateTimeCreationFormControl({
        key: "to",
        control: new FormControl(Date.now(), Validators.required)
      }),
      new InputCreationFormControl({
        title: "price (€)",
        key: "cost",
        control: new FormControl(0, Validators.required)
      })
    ]));
  }

  create() {
    const values = this.form().value;
    return this.service.updateRepairs({
      vehicleId: this.vehicleId,
      data: {
        serviceName: values.serviceName,
        title: values.title,
        from: values.since,
        to: values.to,
        cost: values.cost
      }
    });
  }

}
