import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {FleetRoutes} from "./common/routes/FleetRoutes";
import {UsersComponent} from "./components/users/users.component";
import {DriversComponent} from "./components/drivers/drivers.component";
import {AccountComponent} from "./components/account/account.component";
import {AuthGuard} from "./auth/auth-guard";
import {ReportsComponent} from "./components/reports/reports.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: FleetRoutes.VEHICLES,
  },
  {
    path: FleetRoutes.VEHICLES,
    component: VehiclesComponent,
    title: 'FleetUi | Vehicles',
    canActivate: [AuthGuard],
  },
  {
    path: FleetRoutes.DRIVERS,
    component: DriversComponent,
    title: 'FleetUi | Drivers',
    canActivate: [AuthGuard],
  },
  {
    path: FleetRoutes.USERS,
    component: UsersComponent,
    title: 'FleetUi | Users',
    canActivate: [AuthGuard],
  },
  {
    path: FleetRoutes.ACCOUNT,
    component: AccountComponent,
    title: 'FleetUi | Account',
    canActivate: [AuthGuard],
  },
  {
    path: FleetRoutes.REPORTS,
    component: ReportsComponent,
    title: 'FleetUi | Reports',
    canActivate: [AuthGuard],
  },
  {path: FleetRoutes.LOGIN, component: LoginComponent, title: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
