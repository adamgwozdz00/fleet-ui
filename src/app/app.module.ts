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
import {DRIVER_MOCK_SERVICE} from "./sdk/drivers/driver.service.";
import {DriversMockService} from "./sdk/drivers/drivers-mock.service";
import {VehicleHttpService} from "./sdk/fleet/vehicle-http.service";
import {VEHICLE_SERVICE} from "./sdk/fleet/vehicle.service";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {
  DriversHistoryComponent
} from "./components/vehicles/driver-history/drivers-history.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    VehiclesComponent,
    DriversHistoryComponent,
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
    CommonModule
  ],
  providers: [{provide: DRIVER_MOCK_SERVICE, useClass: DriversMockService},
    {provide: VEHICLE_SERVICE, useClass: VehicleHttpService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
