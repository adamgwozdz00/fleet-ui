import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {
  CreationForm,
  DateTimeCreationFormControl,
  InputCreationFormControl,
  SelectCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {VehicleHttpService} from "./vehicle-http.service";
import {FormControl, Validators} from "@angular/forms";

export class CreateVehicleStateCommand extends CreationCommand {

  constructor(private readonly service: VehicleHttpService,
              private readonly vehicleId: string,
              private drivers: number[] = []) {
    super(new CreationForm([
      new SelectCreationFormControl({
        key: "driverId",
        control: new FormControl("", Validators.required)
      }, drivers),
      new DateTimeCreationFormControl({
        key: "time",
        control: new FormControl(new Date(), Validators.required)
      }),
      new InputCreationFormControl({
        key: "liters",
        control: new FormControl(0, Validators.required)
      }),
      new InputCreationFormControl({
        key: "kilometers",
        control: new FormControl(0, Validators.required)
      })
    ]));
  }

  create() {
    const values = this.form().value;
    return this.service.updateState({
      vehicleId: this.vehicleId,
      data: {
        driverId: values.driverId as number,
        time: values.time,
        liters: values.liters as number,
        kilometers: values.kilometers as number
      }
    })
  }

}
