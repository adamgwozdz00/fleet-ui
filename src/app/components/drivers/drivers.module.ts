import {NgModule} from "@angular/core";
import {DriversComponent} from "./drivers.component";
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
