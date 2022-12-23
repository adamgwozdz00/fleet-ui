import {FormGroup} from "@angular/forms";
import {CreationFormControl} from "./creation-form";

export interface CreationCommand {
  create();

  form(): FormGroup

  controls(): CreationFormControl[]

  isCommandValid(): Boolean;
}
