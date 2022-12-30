import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {VehicleHttpService} from "./vehicle-http.service";
import {
  CreationForm,
  DateTimeCreationFormControl,
  InputCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {FormControl, Validators} from "@angular/forms";

export class CreateRefuelCommand extends CreationCommand {

  constructor(private readonly service: VehicleHttpService,
              private readonly vehicleId: string) {
    super(new CreationForm([
      new InputCreationFormControl({
        title: "cost (€)",
        key: "cost",
        control: new FormControl(0, Validators.required)
      }),
      new InputCreationFormControl({
        title: "liters",
        key: "liters",
        control: new FormControl(0, Validators.required)
      }),
      new DateTimeCreationFormControl({
        key: "time",
        control: new FormControl(new Date(), Validators.required)
      })
    ]));
  }


  create() {
    const values = this.form().value;
    return this.service.refuel({
      vehicleId: this.vehicleId,
      data: {
        cost: values.cost as number,
        liters: values.liters as number,
        time: values.time
      }
    });
  }

}
