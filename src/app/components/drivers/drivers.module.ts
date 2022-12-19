import {NgModule} from "@angular/core";
import {DriversComponent} from "./drivers.component";
import {
  DriversCreationSidebarComponent
} from "./drivers-creation-sidebar/drivers-creation-sidebar.component";
import {
  DriverDetailsSidebarComponent
} from "./driver-details-sidebar/driver-details-sidebar.component";
import {DriverHistoryComponent} from "./driver-history/driver-history.component";
import {CommonModule} from "../../common/common.module";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DriversComponent,
    DriversCreationSidebarComponent,
    DriverDetailsSidebarComponent,
    DriverHistoryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class DriversModule {

}
