import {Component, Inject, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {DRIVERS_SERVICE, DriversService} from "../../sdk/drivers/drivers.service";
import {DriversDTO} from "../../sdk/drivers/driver.dto";
import {Column, IdColumn} from "../../common/fleet-table/column";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  detailsTab: string[] = ['Driver History']
  isOpenSidebar: boolean = false;
  isOpenConfirmSidebar: boolean = false;

  title: Title = new Title("Drivers")

  headerRow: HeaderRow = HeaderRow.createForColumnTitles(["id", "last name", "first name", "seniority", "title"])

  rows: Row[] = [];

  constructor(@Inject(DRIVERS_SERVICE) private readonly driversService: DriversService) {

  }

  ngOnInit(): void {
    this.driversService.getAll().then(all => this.rows = this.mapToRow(all))
  }

  mapToRow(drivers: DriversDTO): Row[] {
    return drivers.drivers.map(d => new Row([
      new IdColumn(d.id),
      new Column(d.lastName),
      new Column(d.firstName),
      new Column(d.seniority),
      new Column(d.title)
    ]));
  }

  console(i: number) {
    console.log(i)
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
}
