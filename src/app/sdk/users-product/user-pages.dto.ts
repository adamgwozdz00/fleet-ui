export class UserPagesDTO {
  constructor(private _pageName: string) {
  }

  public get pageName(): string {
    return this._pageName;
  }

  public get pageRouting(): string {
    return pagesRouting[this._pageName];
  }
}

const pagesRouting = {
  Fleet: '/fleet',
  Reports: '/reports',
  Drivers: '/drivers',
  People: '/people',
  Account: '/account',
};
