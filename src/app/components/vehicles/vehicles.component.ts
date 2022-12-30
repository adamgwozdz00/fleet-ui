import {Component, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {VehiclesDTO} from "../../sdk/vehicles/vehicle.dto";
import {Column} from "../../common/fleet-table/column";
import {UserRoleStorage} from "../../auth/user-role.storage";
import {VehicleHttpService} from "../../sdk/vehicles/vehicle-http.service";
import {CreateVehicleCommand} from "../../sdk/vehicles/create-vehicle.command";
import {DeleteVehicleCommand} from "../../sdk/vehicles/delete-vehicle.command";
import {IdFormatter} from "../../common/fleet-table/column-formatter";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  userRole: string = '';
  isOpenSidebar: boolean = false;
  isOpenDeleteConfirmationSidebar: boolean = false;
  isOpenAdditionSidebar: boolean = false;

  title: Title = new Title("Vehicle")

  headerRow: HeaderRow = HeaderRow.createForColumnTitles(["id", "make", "model", "year", "vin", "kilometers", "fuel type"]);

  rows: Row[] = [];

  createVehicleCommand: CreateVehicleCommand
  deleteVehicleCommand: DeleteVehicleCommand

  actualVehicleId: string;
  private rowMapper = new VehiclesRowMapper();

  constructor(private readonly service: VehicleHttpService,
              private readonly userRoleStorage: UserRoleStorage) {
    this.createVehicleCommand = new CreateVehicleCommand(service);
    this.deleteVehicleCommand = new DeleteVehicleCommand(service, undefined);
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

  openDeletionConfirmSidebar(vehicleId: string = "") {
    this.deleteVehicleCommand = new DeleteVehicleCommand(this.service, vehicleId);
    this.isOpenDeleteConfirmationSidebar = true;
  }

  onCloseDeleteConfirmationSidebar() {
    this.isOpenDeleteConfirmationSidebar = false;
  }

  openAdditionSidebar() {
    this.createVehicleCommand = new CreateVehicleCommand(this.service);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

}

class VehiclesRowMapper {
  map(vehiclesDTO: VehiclesDTO): Row[] {
    return vehiclesDTO.vehicles.map(v => new Row([
      new Column(v.vehicleId, new IdFormatter()),
      new Column(v.make),
      new Column(v.model),
      new Column(v.productionYear),
      new Column(v.vinNumber),
      new Column(v.kilometers),
      new Column(v.fuelType),
    ]))
  }
}
