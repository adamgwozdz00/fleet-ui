import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DriversHttpService} from "../../../sdk/drivers/drivers-http.service";

@Component({
  selector: 'driver-delete-sidebar',
  templateUrl: './driver-delete-sidebar.component.html',
  styleUrls: ['./driver-delete-sidebar.component.css']
})
export class DriverDeleteSidebarComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  @Input()
  actualDriverId: number;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadDrivers = new EventEmitter<boolean>();

  constructor(private driverService: DriversHttpService) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  deleteDriver() {
    this.driverService.delete(this.actualDriverId).then(() => this.reloadDrivers.emit());
    this.closeEvent.emit(true);
  }

}
