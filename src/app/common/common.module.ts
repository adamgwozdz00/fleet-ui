import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { DetailsComponent } from "./details/details.component";
import { LoaderComponent } from "./loader/loader.component";
import { ConfirmSidebarComponent } from "./confirm-sidebar/confirm-sidebar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FleetTableComponent } from "./fleet-table/fleet-table.component";
import { CommonModule as AngularCommonModule } from "@angular/common";
import { ChartComponent } from "./chart/chart.component";
import { CreationSidebarComponent } from "./creation-sidebar/creation-sidebar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DeletionSidebarComponent } from "./deletion-sidebar/deletion-sidebar.component";
import { InputFileComponent } from "./input-file/input-file.component";

@NgModule({
  declarations: [
    ButtonComponent,
    DetailsComponent,
    LoaderComponent,
    ConfirmSidebarComponent,
    SidebarComponent,
    FleetTableComponent,
    ChartComponent,
    CreationSidebarComponent,
    DeletionSidebarComponent,
    InputFileComponent,
  ],
  imports: [AngularCommonModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    DetailsComponent,
    LoaderComponent,
    ConfirmSidebarComponent,
    SidebarComponent,
    FleetTableComponent,
    ChartComponent,
    CreationSidebarComponent,
    DeletionSidebarComponent,
    InputFileComponent,
  ],
})
export class CommonModule {}
