import {Column} from "./column";

export class Row {
  constructor(public columns: Column[]) {
  }
}

export class HeaderRow extends Row {

}

