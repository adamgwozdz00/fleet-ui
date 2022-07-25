import { RowButton } from './row-button';

export abstract class Row {
  constructor(protected options: Options = Options.EMPTY_OPTIONS) {}

  public get editButton(): Options {
    return this.options;
  }
}

export class Options {
  public static EMPTY_OPTIONS = new Options(new RowButton(), new RowButton());

  constructor(public editButton: RowButton, public removeButton: RowButton) {}

  public isEmpty(): boolean {
    return this.editButton.isEmpty() && this.removeButton.isEmpty();
  }
}
