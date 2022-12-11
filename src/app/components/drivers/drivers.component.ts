import {Component, OnInit} from "@angular/core";
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {DriversDTO} from "../../sdk/drivers/driver.dto";
import {Column, IdColumn} from "../../common/fleet-table/column";
import {UserRoleStorage} from "src/app/auth/user-role.storage";
import {DriversHttpService} from "../../sdk/drivers/drivers-http.service";

@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.component.css"],
})
export class DriversComponent implements OnInit {
  private userRole: string = "";
  detailsTab: string[] = ["Driver History"];
  isOpenSidebar: boolean = false;
  isOpenConfirmSidebar: boolean = false;
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

  constructor(
    private readonly driversService: DriversHttpService,
    private readonly userRoleStorage: UserRoleStorage
  ) {
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
          new IdColumn(d.id),
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

  openSidebar() {
    this.isOpenSidebar = true;
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

  updateDrivers() {
    this.driversService.getAll().then(vehiclesDetails => this.rows = this.mapToRow(vehiclesDetails));
  }
}
