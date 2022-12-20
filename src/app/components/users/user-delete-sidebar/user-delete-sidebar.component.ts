import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersHttpService} from "../../../sdk/users/users-http.service";

@Component({
  selector: 'user-delete-sidebar',
  templateUrl: './user-delete-sidebar.component.html',
  styleUrls: ['./user-delete-sidebar.component.css']
})
export class UserDeleteSidebarComponent{

  @Input()
  isOpen: boolean = false;

  @Input()
  actualUserId: number;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadUsers = new EventEmitter<boolean>();

  constructor(private userService : UsersHttpService) { }

  onClose() {
    this.closeEvent.emit(true);
  }

  deleteUser() {
    this.userService.deleteUser(this.actualUserId).then(() => this.reloadUsers.emit());
    this.closeEvent.emit(true);
  }

}
