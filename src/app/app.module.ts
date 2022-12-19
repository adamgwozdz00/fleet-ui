import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./components/login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "./material.module";

import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "./common/common.module";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {DriversComponent} from "./components/drivers/drivers.component";
import {UsersComponent} from "./components/users/users.component";
import {AccountComponent} from "./components/account/account.component";

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
import {
  VehicleCreationSidebarComponent
} from "./components/vehicles/vehicle-creation-sidebar/vehicle-creation-sidebar.component";
import {
  VehicleDetailsSidebarComponent
} from "./components/vehicles/vehicle-details-sidebar/vehicle-details-sidebar.component";
import {ReportsComponent} from "./components/reports/reports.component";
import {
  DriversCreationSidebarComponent
} from "./components/drivers/drivers-creation-sidebar/drivers-creation-sidebar.component";
import {
  DriverDetailsSidebarComponent
} from "./components/drivers/driver-details-sidebar/driver-details-sidebar.component";
import {DriverHistoryComponent} from "./components/drivers/driver-history/driver-history.component";
import {
  UserDetailsSidebarComponent
} from "./components/users/user-details-sidebar/user-details-sidebar.component";
import {UserVehiclesComponent} from "./components/users/user-vehicles/user-vehicles.component";
import {
  UserCreationSidebarComponent
} from "./components/users/user-creation-sidebar/user-creation-sidebar.component";
import {
  VehicleDeleteSidebarComponent
} from "./components/vehicles/vehicle-delete-sidebar/vehicle-delete-sidebar.component";
import {VehiclesModule} from "./components/vehicles/vehicles.module";
import {UsersModule} from "./components/users/users.module";
import {DriversModule} from "./components/drivers/drivers.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AccountComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    VehiclesModule,
    UsersModule,
    DriversModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
