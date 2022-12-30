import {CreationCommand} from "../../common/creation-sidebar/creation.command";
import {
  CreationForm,
  DateCreationFormControl,
  InputCreationFormControl
} from "../../common/creation-sidebar/creation-form";
import {VehicleHttpService} from "./vehicle-http.service";
import {FormControl, Validators} from "@angular/forms";

export class CreateOverviewCommand extends CreationCommand {

  constructor(private readonly service: VehicleHttpService,
              private readonly vehicleId: string) {
    super(new CreationForm([
      new InputCreationFormControl({
        title: "price (€)",
        key: "cost",
        control: new FormControl(0, Validators.required)
      }),
      new InputCreationFormControl({
        key: "description",
        control: new FormControl("")
      }),
      new DateCreationFormControl({
        title: "expires at",
        key: "expirationDate",
        control: new FormControl(new Date(), Validators.required)
      }),
      new InputCreationFormControl({
        title: "title",
        key: "overviewTitle",
        control: new FormControl("", Validators.required)
      }),
    ]));
  }

  create() {
    const values = this.form().value;
    return this.service.updateOverview({
      vehicleId: this.vehicleId,
      data: {
        cost: values.cost as number,
        overviewTitle: values.overviewTitle,
        description: values.description,
        expirationDate: new Date(values.expirationDate)
      }
    })
  }

}
