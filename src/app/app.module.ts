import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { PeopleComponent } from './pages/people/people.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    FleetComponent,
    PeopleComponent,
    DriversComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
