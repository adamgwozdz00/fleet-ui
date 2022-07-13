import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { PeopleComponent } from './pages/people/people.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  { path: 'fleet', component: FleetComponent, title: 'FleetUi | Fleet' },
  { path: 'reports', component: ReportsComponent, title: 'FleetUi | Reports' },
  { path: 'drivers', component: DriversComponent, title: 'FleetUi | Drivers' },
  { path: 'people', component: PeopleComponent, title: 'FleetUi | People' },
  { path: 'account', component: AccountComponent, title: 'FleetUi | Account' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
