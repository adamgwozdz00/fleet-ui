import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  detailsTab: string[] = ["Driver History"];

  constructor() {
  }

  onClose() {
    this.closeEvent.emit(true);
  }


  ngOnInit(): void {
  }

}
