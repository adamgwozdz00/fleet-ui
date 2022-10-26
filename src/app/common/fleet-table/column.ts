export class Column {
  constructor(private readonly _value: any) {
  }


  get value(): string {
    return String(this._value)
  }
}

export interface ColumnData {
  stringify(): string;
}
