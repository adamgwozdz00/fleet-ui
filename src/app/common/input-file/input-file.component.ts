import { Component, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
  selector: "input-file",
  templateUrl: "./input-file.component.html",
  styleUrls: ["./input-file.component.scss"],
})
export class InputFileComponent {
  @Output()
  fileAsText = new EventEmitter<string>();

  protected file: File;

  fileChange(e) {
    this.file = e.target.files[0];

    if (!this.file) {
      return;
    }

    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = () => {
      this.fileAsText.emit(fileReader.result as string);
    };
  }
}
