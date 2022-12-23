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
import {AccountComponent} from "./components/account/account.component";

import {AuthInterceptor} from "./auth/auth.interceptor";
import {ReportsComponent} from "./components/reports/reports.component";
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
