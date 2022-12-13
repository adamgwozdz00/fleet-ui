import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { HeaderRow, Row } from "../../../common/fleet-table/row";
import { Title } from "../../../common/fleet-table/title";
import { UsersHttpService } from "../../../sdk/users/users-http.service";
import { AvailableVehicle } from "./available-vehicle";
import { VehicleHttpService } from "../../../sdk/vehicles/vehicle-http.service";
import { VehiclesDTO } from "../../../sdk/vehicles/vehicle.dto";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "user-vehicles",
  templateUrl: "./user-vehicles.component.html",
  styleUrls: ["./user-vehicles.component.css"],
})
export class UserVehiclesComponent implements OnChanges, OnInit {
  @Input()
  userId: string = "";

  title = new Title("Vehicles");
  headerRow: HeaderRow = HeaderRow.createForColumnTitles([
    "id",
    "make",
    "model",
    "production year",
  ]);
  rows: Row[] = [];
  isOpen: boolean = false;

  vehiclesInDropDown: AvailableVehicle[];

  vehicleForm = new FormGroup({
    vehicle: new FormControl("", Validators.required),
  });

  constructor(
    private userService: UsersHttpService,
    private vehicleService: VehicleHttpService
  ) {}

  ngOnInit(): void {
    this.updateVehicles();
  }

  updateVehicles() {
    this.vehicleService
      .getAllAvailableVehicles()
      .then(
        (result) =>
          (this.vehiclesInDropDown = this.mapToAvailableVehicles(result))
      );
  }

  ngOnChanges(): void {}

  private mapToAvailableVehicles(result: VehiclesDTO) {
    return result.vehicles.map(
      (r) =>
        new AvailableVehicle(r.vehicleId, r.make, r.model, r.productionYear)
    );
  }

  assignVehicleToUser() {
    this.updateVehicles();
  }
}
