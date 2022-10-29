import {FleetRoutes} from "../../common/routes/FleetRoutes";

export class NavbarItem {
  constructor(private readonly _title: String,
              private readonly _routerLinks: FleetRoutes) {
  }

  get title(): String {
    return this._title;
  }

  get routerLink(): FleetRoutes {
    return this._routerLinks;
  }

  isRouterLinkMatches(url: string): boolean {
    if (this.routerLink == url.replace("/", "")) {
      return true;
    }
    return false;
  }
}
