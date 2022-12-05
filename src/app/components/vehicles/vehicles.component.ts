import {Component, Inject, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {VehiclesDTO} from "../../sdk/vehicles/vehicle.dto";
import {Column, IdColumn} from "../../common/fleet-table/column";
import {VEHICLE_SERVICE, VehicleService} from "../../sdk/vehicles/vehicle.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRoleStorage} from "../../auth/user-role.storage";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  userRole: string = '';
  detailsTab: string[] = ['Driver History', 'Insurance History', 'Review History', 'Current Review', 'Current Insurance']
  isOpenSidebar: boolean = false;
  isOpenConfirmSidebar: boolean = false;
  isOpenAdditionSidebar: boolean = false;
  vehicleForm = new FormGroup({
    make: new FormControl("", Validators.required),
    model: new FormControl("", Validators.required),
    year: new FormControl(0, Validators.required),
    fuelType: new FormControl("", Validators.required),
    vinNumber: new FormControl("", Validators.required),
  })

  title: Title = new Title("Vehicle")

  headerRow: HeaderRow = HeaderRow.createForColumnTitles(["id", "make", "model", "year", "vin", "kilometers", "fuel type"]);

  rows: Row[] = [];
  actualVehicleId: string;
  private rowMapper = new VehiclesRowMapper();

  constructor(@Inject(VEHICLE_SERVICE) private readonly service: VehicleService,
              private readonly userRoleStorage: UserRoleStorage) {
  }

  hasAddButton(): boolean {
    return this.userRole == 'ADMIN';
  }

  ngOnInit(): void {
    this.userRoleStorage.getOrRequest().then(role => this.userRole = role);
    this.updateVehicles();
  }

  console(i: number) {
    console.log(i)
  }

  addVehicle() {
    const values = this.vehicleForm.value;
    this.service.create({
      make: values.make,
      vinNumber: values.vinNumber,
      model: values.model,
      fuelType: values.fuelType,
      productionYear: values.year
    }).then(() => this.updateVehicles())
  }

  updateVehicles() {
    this.service.getAll().then(vehiclesDetails => this.rows = this.rowMapper.map(vehiclesDetails));
  }

  openSidebar(vehicleId: string = "") {
    this.isOpenSidebar = true;
    this.actualVehicleId = vehicleId;
  }


  onCloseSidebar() {
    this.isOpenSidebar = false;
  }

  openConfirmSidebar() {
    this.isOpenConfirmSidebar = true;
  }

  onCloseConfirmSidebar() {
    this.isOpenConfirmSidebar = false;
  }

  openAdditionSidebar() {
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }
}

class VehiclesRowMapper {
  map(vehiclesDTO: VehiclesDTO): Row[] {
    return vehiclesDTO.vehicles.map(v => new Row([
      new IdColumn(v.vehicleId),
      new Column(v.make),
      new Column(v.model),
      new Column(v.productionYear),
      new Column(v.vinNumber),
      new Column(v.kilometers),
      new Column(v.fuelType),
    ]))
  }
}
