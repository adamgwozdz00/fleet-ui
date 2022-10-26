import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button/button.component";
import {DetailsComponent} from "./details/details.component";
import {LoaderComponent} from "./loader/loader.component";
import {ConfirmSidebarComponent} from "./confirm-sidebar/confirm-sidebar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FleetTableComponent} from "./fleet-table/fleet-table.component";
import {CommonModule as AngularCommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ButtonComponent,
    DetailsComponent,
    LoaderComponent,
    ConfirmSidebarComponent,
    SidebarComponent,
    FleetTableComponent
  ],
  imports: [
    AngularCommonModule
  ],
  exports: [
    ButtonComponent,
    DetailsComponent,
    LoaderComponent,
    ConfirmSidebarComponent,
    SidebarComponent,
    FleetTableComponent
  ]
})
export class CommonModule {
}
