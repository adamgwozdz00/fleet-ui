import {FormControl, FormGroup} from "@angular/forms";

export class CreationForm {

  private readonly _formGroup: FormGroup;

  constructor(private _controls: CreationFormControl[]) {
    this._formGroup = new FormGroup({});
    for (let control of _controls) {
      this._formGroup.addControl(control.key, control.control);
    }
  }


  get controls(): CreationFormControl[] {
    return this._controls;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
}


export abstract class CreationFormControl {
  protected constructor(private creationFormControl: { title?: string, key: string, control: FormControl }) {
    if (!creationFormControl.title) {
      creationFormControl.title = creationFormControl.key;
    }

  }

  get title(): string {
    return this.creationFormControl.title;
  }

  get key(): string {
    return this.creationFormControl.key;
  }

  get control(): FormControl {
    return this.creationFormControl.control;
  }
}

export class InputCreationFormControl extends CreationFormControl {
  constructor(creationFormControl: { title?: string, key: string, control: FormControl }) {
    super(creationFormControl);
  }
}

export class SelectCreationFormControl extends CreationFormControl {
  constructor(creationFormControl: { title?: string, key: string, control: FormControl }, private _selectOptions: any[]) {

    super(creationFormControl);
  }


  get selectOptions(): string[] {
    return this._selectOptions;
  }
}

export class DateCreationFormControl extends CreationFormControl {
  constructor(creationFormControl: { title?: string, key: string, control: FormControl }) {

    super(creationFormControl);
  }

}

export class DateTimeCreationFormControl extends CreationFormControl {
  constructor(creationFormControl: { title?: string, key: string, control: FormControl }) {

    super(creationFormControl);
  }

}




