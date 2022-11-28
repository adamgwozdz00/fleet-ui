export class Column {
  constructor(private readonly _value: any) {
  }

  get value(): any {
    return this._value
  }

  displayValue(): string {
    return String(this._value);
  }
}

export class IdColumn extends Column {
  displayValue(): string {
    return super.displayValue().slice(0, 6);
  }
}
