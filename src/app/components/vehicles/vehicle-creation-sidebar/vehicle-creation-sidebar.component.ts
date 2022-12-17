import {Component, EventEmitter, Input, OnInit, Output,} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FuelTypes} from "../../../sdk/vehicles/fuel-types";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";

@Component({
  selector: "vehicle-creation-sidebar",
  templateUrl: "./vehicle-creation-sidebar.component.html",
  styleUrls: ["./vehicle-creation-sidebar.component.css"],
})
export class VehicleCreationSidebarComponent implements OnInit {
  @Input()
  isOpen: boolean = false;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadVehicles = new EventEmitter<boolean>();

  fuelTypesOptions: FuelTypes = {fuelTypes: []};

  vehicleForm = new FormGroup({
    make: new FormControl("", Validators.required),
    model: new FormControl("", Validators.required),
    year: new FormControl(undefined, Validators.required),
    fuelType: new FormControl("", Validators.required),
    vinNumber: new FormControl("", Validators.required),
  });

  constructor(
    private readonly service: VehicleHttpService
  ) {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  createVehicle() {
    const values = this.vehicleForm.value;
    this.service
    .create({
      make: values.make,
      vinNumber: values.vinNumber,
      model: values.model,
      fuelType: values.fuelType,
      productionYear: values.year,
    })
    .then(() => this.reloadVehicles.emit(true));
  }

  ngOnInit(): void {
    this.service
    .getFuelTypes()
    .then((result) => (this.fuelTypesOptions = result));
  }
}
