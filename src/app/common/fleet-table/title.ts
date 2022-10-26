export class Title {
  constructor(public value: string = '') {
  }

  public isEmpty(): boolean {
    return this.value === '';
  }

}
