import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {
  CreationForm,
  DateCreationFormControl,
  InputCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {FormControl, Validators} from "@angular/forms";
import {VehicleHttpService} from "./vehicle-http.service";

export class CreateInsuranceCommand extends CreationCommand {
  constructor(private readonly vehicleHttpService: VehicleHttpService,
              private readonly vehicleId: string) {
    super(new CreationForm([
      new InputCreationFormControl({
        title: "price",
        key: "cost",
        control: new FormControl(0, [Validators.required, Validators.min(0)])
      }),
      new DateCreationFormControl({
        title: "expires at",
        key: "expirationDate",
        control: new FormControl(new Date(), Validators.required)
      }),
      new InputCreationFormControl({
        title: "title",
        key: "insuranceTitle",
        control: new FormControl("", Validators.required)
      }),
    ]));
  }

  create() {
    const values = this.form().value;
    return this.vehicleHttpService.updateInsurance({
      vehicleId: this.vehicleId,
      data: {
        cost: values.cost as number,
        insuranceTitle: values.insuranceTitle,
        expirationDate: values.expirationDate
      }
    })
  }

}
