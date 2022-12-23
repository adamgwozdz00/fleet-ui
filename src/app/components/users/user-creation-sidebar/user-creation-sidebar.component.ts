import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersHttpService} from "../../../sdk/users/users-http.service";

@Component({
  selector: 'app-user-creation-sidebar',
  templateUrl: './user-creation-sidebar.component.html',
  styleUrls: ['./user-creation-sidebar.component.css']
})
export class UserCreationSidebarComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  titleOptions = ["JUNIOR", "SENIOR"];

  @Output()
  reloadUsers = new EventEmitter<boolean>();

  usersForm = new FormGroup({
    lastName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required),
  });

  constructor(
    private readonly service: UsersHttpService
  ) {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  ngOnInit(): void {
  }

}
