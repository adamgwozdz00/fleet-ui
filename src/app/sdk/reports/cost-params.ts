import {HttpParams} from "@angular/common/http";

export class CostParams {
  private _years: number[];


  constructor(years: number[] = []) {
    this._years = years;
  }

  public toHttpParams(): HttpParams {
    return new HttpParams().append("years", this._years.toString());
  }
}
