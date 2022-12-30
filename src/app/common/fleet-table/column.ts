import {ColumnFormatter} from "./column-formatter";

export class Column {
  constructor(private readonly _value: any,
              private _formatter : ColumnFormatter = undefined) {
  }


  set formatter(value: ColumnFormatter) {
    this._formatter = value;
  }

  get value(): any {
    return this._value
  }

  displayValue(): string {
   let displayValue = this._value;
    if(this._formatter){
      displayValue = this._formatter.format(displayValue);
    }
    return displayValue;
  }
}

export class IdColumn extends Column {
  displayValue(): string {
    return super.displayValue().slice(0, 6);
  }
}


