import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AccountComponent } from './pages/account/account.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { LoginComponent } from './pages/login/login.component';
import { PeopleComponent } from './pages/people/people.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  {
    path: 'fleet',
    component: FleetComponent,
    title: 'FleetUi | Fleet',
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    component: FleetComponent,
    title: 'FleetUi | Fleet',
    // canActivate: [AuthGuard],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    title: 'FleetUi | Reports',
    // canActivate: [AuthGuard],
  },
  {
    path: 'drivers',
    component: DriversComponent,
    title: 'FleetUi | Drivers',
    // canActivate: [AuthGuard],
  },
  {
    path: 'people',
    component: PeopleComponent,
    title: 'FleetUi | People',
    // canActivate: [AuthGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
    title: 'FleetUi | Account',
    // canActivate: [AuthGuard],
  },
  {
    path: 'details',
    component: CarDetailsComponent,
    title: 'FleetUi | Details',
    // canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent, title: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
