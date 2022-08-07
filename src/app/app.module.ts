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
import { TableComponent } from './common/table/management-table/management-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FleetTableComponent } from './tables/fleet/fleet-table/fleet-table.component';
import { DiversTableComponent } from './tables/drivers/divers-table/divers-table.component';
import { PeopleTableComponent } from './tables/people/people-table/people-table.component';
import { TableTitleComponent } from './common/table/table-title/table-title.component';
import { TableButtonComponent } from './common/common-button/common-button.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountTypeComponent } from './common/account-type/account-type.component';
import { AddPopUpComponent } from './common/add-pop-up/add-pop-up.component';

import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    FleetComponent,
    PeopleComponent,
    DriversComponent,
    AccountComponent,
    NavigationSidebar,
    NavTileComponent,
    TableComponent,
    FleetTableComponent,
    DiversTableComponent,
    PeopleTableComponent,
    TableTitleComponent,
    TableButtonComponent,
    CarDetailsComponent,
    LoginComponent,
    AccountTypeComponent,
    AddPopUpComponent,
  ],
  entryComponents: [AddPopUpComponent],
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
