export class Row<T> {
  constructor(private _data: T) {}

  
  public get data() : T {
    return this._data;
  }
  
}
