import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CreationCommand} from "./creation.command";
import {
  CreationFormControl,
  DateCreationFormControl,
  DateTimeCreationFormControl,
  InputCreationFormControl,
  SelectCreationFormControl
} from "./creation-form";

@Component({
  selector: "creation-sidebar",
  templateUrl: "./creation-sidebar.component.html",
})
export class CreationSidebarComponent {
  @Input()
  isOpen: boolean = false;

  @Input()
  title: string
  @Input()
  overrideInputs = false;

  @Input()
  creationCommand: CreationCommand

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadEvent = new EventEmitter<boolean>();

  onClose() {
    this.closeEvent.emit(true);
  }

  create() {
    this.creationCommand.create()
    .then(() => this.reloadEvent.emit(true))
    .then(() => this.onClose());
  }

  isSelect(control: CreationFormControl): boolean {
    return control instanceof SelectCreationFormControl;
  }

  isInput(control: CreationFormControl): boolean {
    return control instanceof InputCreationFormControl;
  }

  isDate(control: CreationFormControl): boolean {
    return control instanceof DateCreationFormControl;
  }

  isDateTime(control: CreationFormControl): boolean {
    return control instanceof DateTimeCreationFormControl;
  }

  getOptions(control: CreationFormControl): string[] {
    if (!this.isSelect(control)) {
      throw new Error("Is not selector.");
    }
    return (control as SelectCreationFormControl).selectOptions;

  }


}
