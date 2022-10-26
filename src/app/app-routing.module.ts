import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {FleetRoutes} from "./common/routes/FleetRoutes";
import {UsersComponent} from "./components/users/users.component";
import {DriversComponent} from "./components/drivers/drivers.component";


const routes: Routes = [
  {
    path: FleetRoutes.VEHICLES,
    component: VehiclesComponent,
    title: 'FleetUi | Vehicles',
    // canActivate: [AuthGuard],
  },
  {
    path: FleetRoutes.DRIVERS,
    component: DriversComponent,
    title: 'FleetUi | Drivers',
    // canActivate: [AuthGuard],
  },
  {
    path: FleetRoutes.USERS,
    component: UsersComponent,
    title: 'FleetUi | Users',
    // canActivate: [AuthGuard],
  },
  {path: FleetRoutes.LOGIN, component: LoginComponent, title: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
