import {Component, OnInit} from '@angular/core';
import {FleetTableService} from "../../sdk/fleet/fleet-table.service";
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  detailsTab: string[] = ['Driver History', 'Insurance History', 'Review History', 'Current Review', 'Current Insurance']
  isOpenSidebar: boolean = false;
  isOpenConfirmSidebar: boolean = false;

  title: Title = new Title("Vehicle")

  headerRow: HeaderRow = new HeaderRow([]);

  rows: Row[] = [];

  constructor(private readonly vehicleService: FleetTableService) {

  }

  ngOnInit(): void {
    this.vehicleService.getHeaderRows().then(row => this.headerRow = row);
    this.vehicleService.getRows().then(rows => this.rows = rows);
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
