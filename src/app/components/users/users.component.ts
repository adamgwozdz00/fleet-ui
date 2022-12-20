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
  isOpenDeleteConfirmationSidebar: boolean = false;

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
  }

  openSidebar(userId: number) {
    this.isOpenSidebar = true;
    this.actualUserId = userId;
  }

  onCloseSidebar() {
    this.isOpenSidebar = false;
  }

  openDeleteConfirmationSidebar(userId: number) {
    this.actualUserId = userId;
    this.isOpenDeleteConfirmationSidebar = true;
  }

  onCloseDeleteConfirmationSidebar() {
    this.isOpenDeleteConfirmationSidebar = false;
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
