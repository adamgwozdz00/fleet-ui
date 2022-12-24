import {NgModule} from "@angular/core";
import {VehiclesComponent} from "./vehicles.component";
import {
  VehicleDetailsSidebarComponent
} from "./vehicle-details-sidebar/vehicle-details-sidebar.component";
import {InsurancesHistoryComponent} from "./insurances-history/insurances-history.component";
import {DriversHistoryComponent} from "./drivers-history/drivers-history.component";
import {OverviewsHistoryComponent} from "./overviews-history/overviews-history.component";
import {CommonModule} from "../../common/common.module";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule(({
  declarations: [
    VehiclesComponent,
    VehicleDetailsSidebarComponent,
    InsurancesHistoryComponent,
    DriversHistoryComponent,
    OverviewsHistoryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
}))
export class VehiclesModule {

}
