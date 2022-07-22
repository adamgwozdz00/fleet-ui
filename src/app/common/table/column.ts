export class Column {
  constructor(
    private _title: string,
    private _definition: string,
    private _isFirst: boolean = false
  ) {}

  public get title(): string {
    return this._title;
  }

  public get definition(): string {
    return this._definition;
  }

  public get isFirst(): boolean {
    return this._isFirst;
  }
}
