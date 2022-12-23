import {FormGroup} from "@angular/forms";
import {CreationForm, CreationFormControl} from "./creation-form";

export abstract class CreationCommand {

  constructor(protected creationForm : CreationForm) {
  }

  abstract create();

  form(): FormGroup{
    return this.creationForm.formGroup;
  }

  controls(): CreationFormControl[]{
    return this.creationForm.controls;
  }

  isCommandValid(): Boolean{
    return this.creationForm.formGroup.valid;
  }
}
