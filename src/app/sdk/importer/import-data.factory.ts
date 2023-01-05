import {InputFile} from "./input-file";

export interface ImportDataFactory<T extends InputFile, V> {
  create(data: T): V
}
