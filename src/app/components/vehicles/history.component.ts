import {Directive, Input, OnChanges} from "@angular/core";
import {HeaderRow, Row} from "../../common/fleet-table/row";
import {Title} from "../../common/fleet-table/title";

@Directive({})
export abstract class HistoryComponent<T> implements OnChanges {
  @Input()
  vehicleId: string = "";
  rows: Row[] = [];

  protected constructor(public title: Title,
                        public headerRow: HeaderRow) {
  }

  ngOnChanges(): void {
    this.load(this.vehicleId)
    .then(overviewsHistory => this.rows = this.map(overviewsHistory))
  }

  abstract load(vehicleId: string): Promise<T>;

  abstract map(details: T): Row[]

}

