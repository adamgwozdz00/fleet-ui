import {Component, EventEmitter, Input, Output} from "@angular/core";
import {InputFileImporter} from "../../sdk/importer/input-file-importer";

@Component({
  selector: "input-file",
  templateUrl: "./input-file.component.html",
  styleUrls: ["./input-file.component.scss"],
})
export class InputFileComponent {
  @Input()
  importer: InputFileImporter
  @Output()
  importedEvent = new EventEmitter<boolean>();
  protected file: File;

  fileChange(e) {
    this.file = e.target.files[0];

    if (!this.file) {
      return;
    }

    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = () => {
      this.importer.import(fileReader.result).then(() => this.importedEvent.emit());
    };
  }
}
