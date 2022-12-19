import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehicleHttpService} from "../../../sdk/vehicles/vehicle-http.service";
import {UsersHttpService} from "../../../sdk/users/users-http.service";

@Component({
  selector: 'vehicle-delete-sidebar',
  templateUrl: './vehicle-delete-sidebar.component.html',
  styleUrls: ['./vehicle-delete-sidebar.component.css']
})
export class VehicleDeleteSidebarComponent implements OnInit {
  @Input()
  isOpen: boolean = false;
  @Input()
  userRole: string = "USER"
  @Input()
  actualVehicleId: string = ""
  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadVehicles = new EventEmitter<boolean>();

  constructor(private vehicleService: VehicleHttpService,
              private userService: UsersHttpService) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  deleteVehicle() {
    if (this.userRole == "USER") {
      this.userService.deleteVehicleFromUser({vehicleId: this.actualVehicleId})
      .then(() =>this.reloadVehicles.emit())

    }
    if (this.userRole == "ADMIN") {
      this.vehicleService.delete(this.actualVehicleId)
      .then(() =>this.reloadVehicles.emit());

    }

    this.closeEvent.emit(true);

  }
}
