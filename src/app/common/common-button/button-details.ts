export class ButtonDetails {
  constructor(
    private _buttonTitle: string = '',
    private _event: Function = null
  ) {
  }

  public get buttonTitle(): string {
    return this._buttonTitle;
  }

  public get event(): Function {
    return this._event;
  }

  public isEmpty(): boolean {
    return this._buttonTitle == '' || this._event == null;
  }
}
