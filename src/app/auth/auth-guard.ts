import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import {AuthService} from './auth.service';
import {FleetRoutes} from "../common/routes/FleetRoutes";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isAuthenticated()) {
      // authorised so return true
      return true;
    }

    this.router.navigate([FleetRoutes.LOGIN]);
    return false;
  }
}
