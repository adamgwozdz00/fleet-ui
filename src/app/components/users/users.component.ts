import {Component, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {PeopleTableService} from "../../sdk/people/people-table.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  detailsTab: string[] = ['Vehicles']
  isOpenSidebar: boolean = false;
  isOpenConfirmSidebar: boolean = false;

  title: Title = new Title("Users")

  headerRow: HeaderRow = new HeaderRow([]);

  rows: Row[] = [];

  constructor(private readonly usersService: PeopleTableService) {

  }

  ngOnInit(): void {
    this.usersService.getHeaderRow().then(row => this.headerRow = row);
    this.usersService.getRows().then(rows => this.rows = rows);
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
