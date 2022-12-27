import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DriversHttpService} from "../../../sdk/drivers/drivers-http.service";
import {SeniorityOperation} from "../../../sdk/drivers/driver.dto";

@Component({
  selector: 'driver-details-sidebar',
  templateUrl: './driver-details-sidebar.component.html',
  styleUrls: ['./driver-details-sidebar.component.css']
})
export class DriverDetailsSidebarComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  @Input()
  actualDriverId: any;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  updateEvent = new EventEmitter<boolean>();

  detailsTab: string[] = ["Driver History"];

  constructor(private readonly service: DriversHttpService) {
  }

  incrementSeniority() {
    this.update(SeniorityOperation.INCREMENT);
  }

  decrementSeniority() {
    this.update(SeniorityOperation.DECREMENT);
  }

  promote() {
    this.update(SeniorityOperation.PROMOTION);
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  ngOnInit(): void {
  }

  private update(operation: SeniorityOperation) {
    this.service.updateDriver({
      driverId: this.actualDriverId,
      operation: operation
    }).then(() => this.updateEvent.emit(true));
  }

}
