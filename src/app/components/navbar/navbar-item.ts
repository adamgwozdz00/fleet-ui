import {FleetRoutes} from "../../common/routes/FleetRoutes";

export class NavbarItem {
  constructor(private readonly _title: String,
              private readonly _routerLinks: FleetRoutes,
              private _isActive: boolean = false) {
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get title(): String {
    return this._title;
  }

  get routerLink(): FleetRoutes {
    return this._routerLinks;
  }

  activateIfMatches(url: string): void {
    if (this.routerLink.toString() == url.replace("/", "")) {
      this._isActive = true;
      return;
    }
    this._isActive = false;
  }
}
