export class TableTitle {
  constructor(private _title: string = '') {}

  public isEmpty(): boolean {
    return this._title === '';
  }

  get title(): string {
    return this._title;
  }
}
