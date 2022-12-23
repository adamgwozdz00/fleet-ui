import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {
  CreationForm,
  InputCreationFormControl,
  SelectCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {VehicleHttpService} from "./vehicle-http.service";
import {FormControl, Validators} from "@angular/forms";

export class CreateVehicleCommand extends CreationCommand {


  constructor(private vehicleService: VehicleHttpService) {
    super(new CreationForm([
      new InputCreationFormControl({
        key: "make",
        control: new FormControl("", Validators.required)
      }),
      new InputCreationFormControl({
        key: "model",
        control: new FormControl("", Validators.required)
      }),
      new InputCreationFormControl({
        title: "production year",
        key: "year",
        control: new FormControl(1980, Validators.required)
      }),
      new SelectCreationFormControl({
        title: "fuel type",
        key: "fuelType",
        control: new FormControl("", Validators.required)
      }, ["GASOLINE", "DIESEL", "HYBRID", "ELECTRIC"]),
      new InputCreationFormControl({
        title: "vin",
        key: "vinNumber",
        control: new FormControl("", Validators.required)
      }),
    ]));
  }

  create() {
    const values = this.form().value;
    return this.vehicleService.create( {
      make: values.make,
      vinNumber: values.vinNumber,
      model: values.model,
      fuelType: values.fuelType,
      productionYear: values.year,
    })
  }


}
