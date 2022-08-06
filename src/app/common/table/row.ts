import { ButtonDetails } from '../common-button/button-details';
import { DetailsButton } from './details-button';

export abstract class Row {
  constructor(protected options: Options = new Options()) {}

  public get editButton(): Options {
    return this.options;
  }
}

export class Options {
  private detailsButton: DetailsButton;

  constructor() {}

  withDetailsButton(detailsButton: DetailsButton): Options {
    this.detailsButton = detailsButton;
    return this;
  }

  getButtons(): ButtonDetails[] {
    return [this.detailsButton];
  }

  public isEmpty(): boolean {
    return this.detailsButton.isEmpty();
  }
}
