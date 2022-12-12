export class AvailableVehicle{
  constructor(private _id: string,
              private _make : string,
              private _model : string,
              private _productionYear : number) {
  }


  get id(): string {
    return this._id;
  }

  get make(): string {
    return this._make;
  }

  get model(): string {
    return this._model;
  }

  get productionYear(): number {
    return this._productionYear;
  }
}
