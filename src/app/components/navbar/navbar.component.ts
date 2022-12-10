import { Component, OnInit } from "@angular/core";
import { NavbarItem } from "./navbar-item";
import { NavigationEnd, Router } from "@angular/router";
import { NavbarItemsFactory } from "./navbar-items-factory";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  navbarItems: NavbarItem[];
  activeTab: String;
  visible: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly factory: NavbarItemsFactory,
    private readonly authenticationService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (!event.urlAfterRedirects) {
        return;
      }

      if (event.urlAfterRedirects == "/login") {
        this.visible = false;
        return;
      }

      if (!this.authenticationService.isAuthenticated()) {
        return;
      }

      this.visible = true;

      if (!this.navbarItems) {
        this.factory.create().then((items) => {
          this.navbarItems = items;
          this.activeTab = this.navbarItems?.find((e) =>
            e.isRouterLinkMatches(event.urlAfterRedirects)
          ).routerLink;
        });
        return;
      }

      this.activeTab = this.navbarItems?.find((e) =>
        e.isRouterLinkMatches(event.urlAfterRedirects)
      ).routerLink;
    });
  }
}
