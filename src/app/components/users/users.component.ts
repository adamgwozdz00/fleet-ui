import {Component, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {UsersHttpService} from "../../sdk/users/users-http.service";
import {UsersDataDTO} from "../../sdk/users/users-data.dto";
import {Column, IdColumn} from "../../common/fleet-table/column";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isOpenSidebar: boolean = false;
  isOpenConfirmSidebar: boolean = false;

  isOpenAdditionSidebar: boolean = false;

  title: Title = new Title("Users")

  headerRow: HeaderRow = HeaderRow.createForColumnTitles(["id", "first name", "last name", "title"]);

  rows: Row[] = [];

  actualUserId: number;

  constructor(private readonly usersService: UsersHttpService) {

  }

  ngOnInit(): void {
    this.updateUsers()
  }

  updateUsers() {
    this.usersService.getAllUsers().then(users => this.rows = this.mapToRow(users));
  }

  console(i: number) {
    console.log(i)
  }

  openSidebar(userId: number) {
    this.isOpenSidebar = true;
    this.actualUserId = userId;
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

  private mapToRow(users: UsersDataDTO) {
    return users.users.map(
      user => new Row([
        new IdColumn(user.id),
        new Column(user.firstName),
        new Column(user.lastName),
        new Column(user.title)]
      )
    );
  }
}
