import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DeletionCommand} from "./deletion.command";

@Component({
  selector: "deletion-sidebar",
  templateUrl: "./deletion-sidebar.compoenent.html",
})
export class DeletionSidebarComponent {
  @Input()
  isOpen: boolean = false;

  @Input()
  deletionCommand: DeletionCommand

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadEvent = new EventEmitter<boolean>();


  onClose() {
    this.closeEvent.emit(true);
  }

  delete() {
    this.deletionCommand.delete()
    .then(() => this.reloadEvent.emit())
    .then(() => this.closeEvent.emit(true));
  }

}
