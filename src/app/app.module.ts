import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from './material.module';

import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "./common/common.module";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {DriversComponent} from "./components/drivers/drivers.component";
import {UsersComponent} from "./components/users/users.component";
import {AccountComponent} from "./components/account/account.component";
import {DRIVERS_SERVICE} from "./sdk/drivers/drivers.service";
import {VehicleHttpService} from "./sdk/vehicles/vehicle-http.service";
import {VEHICLE_SERVICE} from "./sdk/vehicles/vehicle.service";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {
  DriversHistoryComponent
} from "./components/vehicles/drivers-history/drivers-history.component";
import {
  OverviewsHistoryComponent
} from "./components/vehicles/overviews-history/overviews-history.component";
import {
  InsurancesHistoryComponent
} from "./components/vehicles/insurances-history/insurances-history.component";
import {DriversHttpService} from "./sdk/drivers/drivers-http.service";
import {
  VehicleCreationSidebarComponent
} from "./components/vehicles/vehicle-creation-sidebar/vehicle-creation-sidebar.component";
import {
  VehicleDetailsSidebarComponent
} from "./components/vehicles/vehicle-details-sidebar/vehicle-details-sidebar.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    VehiclesComponent,
    VehicleCreationSidebarComponent,
    VehicleDetailsSidebarComponent,
    DriversHistoryComponent,
    OverviewsHistoryComponent,
    InsurancesHistoryComponent,
    DriversComponent,
    UsersComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [{provide: DRIVERS_SERVICE, useClass: DriversHttpService},
    {provide: VEHICLE_SERVICE, useClass: VehicleHttpService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
