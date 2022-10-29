import {Component, OnInit} from '@angular/core';
import {NavbarItem} from "./navbar-item";
import {FleetRoutes} from "../../common/routes/FleetRoutes";
import {NavigationEnd, Router} from "@angular/router";
import {NavbarItemsFactory} from "./navbar-items-factory";
import {AuthUserSessionStorageService} from "../../auth/auth-user-session-storage.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly navbarItems: NavbarItem[];


  constructor(private readonly router: Router,
              private readonly authUserSessionStorageService: AuthUserSessionStorageService) {
    this.navbarItems = new NavbarItemsFactory().create(this.authUserSessionStorageService.getAccountType());
  }

  isLoginNavigated(): boolean {
    const navigatedRoute = this.navbarItems.find(it => it.isActive);
    if (!navigatedRoute) {
      return false;
    }
    return navigatedRoute.routerLink === FleetRoutes.LOGIN;
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navbarItems.forEach(it => it.activateIfMatches(event.url));
      }
    });
  }

  toEnabledItems(): NavbarItem[] {
    return this.navbarItems.filter(it => it.isEnabled);
  }
}
