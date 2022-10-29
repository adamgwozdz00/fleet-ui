import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavbarItem} from "./navbar-item";
import {FleetRoutes} from "../../common/routes/FleetRoutes";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {NavbarItemsFactory} from "./navbar-items-factory";
import {AuthUserSessionStorageService} from "../../auth/auth-user-session-storage.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarItems: NavbarItem[];
  activeTab: FleetRoutes;

  constructor(private readonly router: Router,
              private readonly authUserSessionStorageService: AuthUserSessionStorageService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEnd) => {
      this.navbarItems = new NavbarItemsFactory().create(this.authUserSessionStorageService.getAccountType());
      if(event.urlAfterRedirects) {
        this.activeTab = this.navbarItems?.find((e =>  e.isRouterLinkMatches(event.urlAfterRedirects)))?.routerLink;
      }
    });
  }

}
