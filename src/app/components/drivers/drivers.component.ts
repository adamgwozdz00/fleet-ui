import {Component, OnInit} from "@angular/core";
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {DriversDTO} from "../../sdk/drivers/driver.dto";
import {Column} from "../../common/fleet-table/column";
import {UserRoleStorage} from "src/app/auth/user-role.storage";
import {DriversHttpService} from "../../sdk/drivers/drivers-http.service";
import {CreateDriverCommand} from "../../sdk/drivers/create-driver.command";
import {DeleteDriverCommand} from "../../sdk/drivers/delete-driver.command";

@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.css"],
})
export class DriversComponent implements OnInit {
  isOpenSidebar: boolean = false;
  isOpenDeleteConfirmationSidebar: boolean = false;
  isOpenAdditionSidebar: boolean = false;
  title: Title = new Title("Drivers");
  headerRow: HeaderRow = HeaderRow.createForColumnTitles([
    "id",
    "last name",
    "first name",
    "seniority",
    "title",
  ]);
  rows: Row[] = [];

  createDriverCommand: CreateDriverCommand
  deleteDriverCommand: DeleteDriverCommand
  driverId: number;
  private userRole: string = "";


  constructor(
    private readonly driversService: DriversHttpService,
    private readonly userRoleStorage: UserRoleStorage
  ) {
    this.createDriverCommand = new CreateDriverCommand(driversService);
    this.deleteDriverCommand = new DeleteDriverCommand(driversService, undefined);
  }

  get hasAddButton(): boolean {
    return this.userRole == "ADMIN";
  }

  ngOnInit(): void {
    this.userRoleStorage.getOrRequest().then((role) => (this.userRole = role));
    this.updateDrivers();
  }

  mapToRow(drivers: DriversDTO): Row[] {
    return drivers.drivers.map(
      (d) =>
        new Row([
          new Column(d.id),
          new Column(d.lastName),
          new Column(d.firstName),
          new Column(d.seniority),
          new Column(d.title),
        ])
    );
  }

  console(i: number) {
    console.log(i);
  }

  openSidebar(driverId: number) {
    this.isOpenSidebar = true;
    this.driverId = driverId;
  }

  onCloseSidebar() {
    this.isOpenSidebar = false;
  }

  openDeleteConfirmationSidebar(driverId: number) {
    this.deleteDriverCommand = new DeleteDriverCommand(this.driversService, driverId);
    this.isOpenDeleteConfirmationSidebar = true;
  }

  onCloseDeleteConfirmationSidebar() {
    this.isOpenDeleteConfirmationSidebar = false;
  }

  openAdditionSidebar() {
    this.createDriverCommand = new CreateDriverCommand(this.driversService);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

  updateDrivers() {
    this.driversService.getAll().then(vehiclesDetails => this.rows = this.mapToRow(vehiclesDetails));
  }

  isAdmin(): boolean {
    return this.userRole == "ADMIN";
  }
}
