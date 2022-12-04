export class NavbarItem {
  constructor(private readonly _title: String,
              private readonly _routerLinks: String) {
  }

  get title(): String {
    return this._title;
  }

  get routerLink(): String {
    return this._routerLinks;
  }

  isRouterLinkMatches(url: string): boolean {
    if (this.routerLink == url.replace("/", "")) {
      return true;
    }
    return false;
  }
}
