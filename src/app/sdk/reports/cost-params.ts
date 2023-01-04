import {HttpParams} from "@angular/common/http";

export class CostParamsBuilder {
  private readonly costParams: CostParams;

  constructor() {
    this.costParams = new CostParams();
  }

  withIncludedFuelCost() {
    this.costParams.includeFuelCost = true;
    return this;
  }

  withIncludedOverviewCost() {
    this.costParams.includeOverviewCost = true;
    return this;
  }

  withIncludedInsuranceCost() {
    this.costParams.includeInsuranceCost = true;
    return this;
  }

  withIncludedRepairCost() {
    this.costParams.includeRepairCost = true;
    return this;
  }

  withDataInYears(years: number[]) {
    this.costParams.years = years;
    return this;
  }

  build(): CostParams {
    return this.costParams;
  }
}

export class CostParams {
  constructor(years: number[] = []) {
    this._years = years;
  }

  private _years: number[] = [];

  set years(value: number[]) {
    this._years = value;
  }

  private _includeFuelCost: boolean = false;

  set includeFuelCost(value: boolean) {
    this._includeFuelCost = value;
  }

  private _includeOverviewCost: boolean = false;

  set includeOverviewCost(value: boolean) {
    this._includeOverviewCost = value;
  }

  private _includeInsuranceCost: boolean = false;

  set includeInsuranceCost(value: boolean) {
    this._includeInsuranceCost = value;
  }

  private _includeRepairCost: boolean = false;

  set includeRepairCost(value: boolean) {
    this._includeRepairCost = value;
  }

  public toHttpParams(): HttpParams {
    return new HttpParams()
    .append("years", this._years.toString())
    .append("includeFuelCost", this._includeFuelCost)
    .append("includeOverviewCost", this._includeOverviewCost)
    .append("includeInsuranceCost", this._includeInsuranceCost)
    .append("includeRepairCost", this._includeInsuranceCost)
  }
}
