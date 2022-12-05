import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'vehicle-details-sidebar',
  templateUrl: './vehicle-details-sidebar.component.html',
  styleUrls: ['./vehicle-details-sidebar.component.css']
})
export class VehicleDetailsSidebarComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  @Input()
  actualVehicleId: string;


  @Output()
  closeEvent = new EventEmitter<boolean>();

  detailsTab: string[] = ['Driver History', 'Insurance History', 'Review History', 'Current Review', 'Current Insurance']

  constructor() {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  ngOnInit(): void {
  }

}
