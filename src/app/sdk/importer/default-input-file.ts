import {InputFile} from "./input-file";

export class DefaultInputFile implements InputFile {
  constructor(private _fileAsString: string) {
  }

  getRawData(): string {
    return this._fileAsString;
  }

}
