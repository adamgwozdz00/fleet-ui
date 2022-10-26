import {Component, OnInit} from '@angular/core';
import {NavbarItem} from "./navbar-item";
import {FleetRoutes} from "../../common/routes/FleetRoutes";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly navbarItems: NavbarItem[];


  constructor(private readonly router: Router) {
    this.navbarItems = [
      new NavbarItem("Vehicles", FleetRoutes.VEHICLES),
      new NavbarItem("Drivers", FleetRoutes.DRIVERS),
      new NavbarItem("Users", FleetRoutes.USERS),
    ];


  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navbarItems.forEach(it => it.activateIfMatches(event.url));
      }
    });
  }


}
