import {Component, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {DriversTableService} from "../../sdk/drivers/drivers-table.service";

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

  headerRow: HeaderRow = new HeaderRow([]);

  rows: Row[] = [];

  constructor(private readonly driversService: DriversTableService) {

  }

  ngOnInit(): void {
    this.driversService.getHeaderRows().then(row => this.headerRow = row);
    this.driversService.getRows().then(rows => this.rows = rows);
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
