import { ButtonDetails } from '../common-button/button-details';

export abstract class Row {
  constructor(protected options: Options = Options.EMPTY_OPTIONS) {}

  public get editButton(): Options {
    return this.options;
  }
}

export class Options {
  public static EMPTY_OPTIONS = new Options(new ButtonDetails(), new ButtonDetails());

  constructor(public editButton: ButtonDetails, public removeButton: ButtonDetails) {}

  public isEmpty(): boolean {
    return this.editButton.isEmpty() && this.removeButton.isEmpty();
  }
}
