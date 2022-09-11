import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { PeopleComponent } from './pages/people/people.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { AccountComponent } from './pages/account/account.component';
import { NavigationSidebar } from './common/navigation/navigation-sidebar/navigation-sidebar.component';
import { NavTileComponent } from './common/navigation/nav-tile/nav-tile.component';
import { ManagementTableComponent } from './common/table/management-table/management-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableTitleComponent } from './common/table/table-title/table-title.component';
import { TableButtonComponent } from './common/common-button/common-button.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountTypeComponent } from './common/account-type/account-type.component';
import { AppMaterialModule } from './material.module';
import { FleetPopUpComponent } from './pages/fleet/fleet-pop-up/fleet-pop-up.component';
import { FleetTableComponent } from './pages/fleet/fleet-table/fleet-table.component';
import { FleetTableComponent as RefactorTableComponent} from './components/fleet-table/fleet-table.component'
import { DiversTableComponent } from './pages/drivers/divers-table/divers-table.component';
import { PeopleTableComponent } from './pages/people/people-table/people-table.component';
import { InformationTableComponent } from './common/table/information-table/information-table.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfirmSidebarComponent } from './components/confirm-sidebar/confirm-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    FleetComponent,
    PeopleComponent,
    PeopleTableComponent,
    DriversComponent,
    AccountComponent,
    NavigationSidebar,
    NavTileComponent,
    ManagementTableComponent,
    RefactorTableComponent,
    FleetTableComponent,
    DiversTableComponent,
    TableTitleComponent,
    TableButtonComponent,
    CarDetailsComponent,
    LoginComponent,
    AccountTypeComponent,
    FleetPopUpComponent,
    InformationTableComponent,
    ButtonComponent,
    LoaderComponent,
    SidebarComponent,
    ConfirmSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
