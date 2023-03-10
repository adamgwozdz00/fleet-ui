import {Component, OnInit} from '@angular/core';
import {Title} from "../../common/fleet-table/title";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {UsersHttpService} from "../../sdk/users/users-http.service";
import {UsersDataDTO} from "../../sdk/users/users-data.dto";
import {Column} from "../../common/fleet-table/column";
import {CreateUserCommand} from "../../sdk/users/create-user.command";
import {UserCreationService} from "../../sdk/users/user-creation.service";
import {DeleteUserCommand} from "../../sdk/users/delete-user.command";
import {UserDeletionService} from "../../sdk/users/user-deletion.service";

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
  isOpenAdditionSidebar: boolean = false;

  createUserCommand: CreateUserCommand;

  deleteUserCommand: DeleteUserCommand;

  constructor(private readonly usersService: UsersHttpService,
              public readonly userCreationService: UserCreationService,
              private readonly userDeletionService: UserDeletionService) {
    this.createUserCommand = new CreateUserCommand(this.userCreationService);
    this.deleteUserCommand = new DeleteUserCommand(this.userDeletionService, undefined)
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
    this.deleteUserCommand = new DeleteUserCommand(this.userDeletionService, userId)
    this.isOpenDeleteConfirmationSidebar = true;
  }

  onCloseDeleteConfirmationSidebar() {
    this.isOpenDeleteConfirmationSidebar = false;
  }

  openAdditionSidebar() {
    this.createUserCommand = new CreateUserCommand(this.userCreationService);
    this.isOpenAdditionSidebar = true;
  }

  onCloseAdditionSidebar() {
    this.isOpenAdditionSidebar = false;
  }

  private mapToRow(users: UsersDataDTO) {
    return users.users.map(
      user => new Row([
        new Column(user.id),
        new Column(user.firstName),
        new Column(user.lastName),
        new Column(user.title)]
      )
    );
  }
}
