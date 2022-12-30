import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {Title} from "../../../common/fleet-table/title";
import {UsersHttpService} from "../../../sdk/users/users-http.service";
import {AvailableVehicle} from "./available-vehicle";
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {VehiclesDTO} from "../../../sdk/vehicles/vehicle.dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Column} from "../../../common/fleet-table/column";
import {Availability} from "../../../sdk/vehicles/availability";
import {IdFormatter} from "../../../common/fleet-table/column-formatter";

@Component({
  selector: "user-vehicles",
  templateUrl: "./user-vehicles.component.html",
  styleUrls: ["./user-vehicles.component.css"],
})
export class UserVehiclesComponent implements OnChanges, OnInit {
  @Input()
  userId: number;

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
  ) {
  }

  ngOnInit(): void {
    this.updateVehicles();
  }

  updateVehicles() {
    this.updateAvailableVehicles();
    this.updateUserVehicles();
  }

  ngOnChanges(): void {
    this.updateVehicles();
  }

  assignVehicleToUser() {
    this.userService.addVehicleToUser({
      userId: this.userId,
      vehicleId: this.vehicleForm.value.vehicle
    }).then(
      () => this.updateVehicles()
    );
  }

  removeVehicleAssigment(vehicleId: string) {
    this.userService.deleteVehicleFromUser({
      userId: this.userId,
      vehicleId: vehicleId
    }).then(
      () => this.updateVehicles()
    );
  }

  private mapToAvailableVehicles(result: VehiclesDTO) {
    return result.vehicles.map(
      (r) =>
        new AvailableVehicle(r.vehicleId, r.make, r.model, r.productionYear)
    );
  }

  private updateAvailableVehicles() {
    this.vehicleService
    .getAll({availability: Availability.AVAILABLE})
    .then(
      (result) =>
        (this.vehiclesInDropDown = this.mapToAvailableVehicles(result))
    );
  }

  private updateUserVehicles() {
    this.vehicleService.getAll({userId: this.userId})
    .then(vehicles => this.rows = this.mapToRows(vehicles));
  }

  private mapToRows(vehicles: VehiclesDTO): Row[] {
    return vehicles.vehicles.map(vehicle =>
      new Row(
        [
          new Column(vehicle.vehicleId, new IdFormatter()),
          new Column(vehicle.make),
          new Column(vehicle.model),
          new Column(vehicle.productionYear)
        ]
      ))
      ;
  }
}
