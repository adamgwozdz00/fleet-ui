import {NgModule} from "@angular/core";
import {CommonModule} from "../../common/common.module";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {UsersComponent} from "./users.component";
import {UserDetailsSidebarComponent} from "./user-details-sidebar/user-details-sidebar.component";
import {UserVehiclesComponent} from "./user-vehicles/user-vehicles.component";
import {
  UserCreationSidebarComponent
} from "./user-creation-sidebar/user-creation-sidebar.component";

@NgModule({
  declarations:[
    UsersComponent,
    UserDetailsSidebarComponent,
    UserVehiclesComponent,
    UserCreationSidebarComponent,
  ],
  imports:[
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule{

}
