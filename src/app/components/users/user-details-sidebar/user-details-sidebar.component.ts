import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'user-details-sidebar',
  templateUrl: './user-details-sidebar.component.html',
  styleUrls: ['./user-details-sidebar.component.css']
})
export class UserDetailsSidebarComponent implements OnChanges {

  @Input()
  isOpen: boolean = false;

  @Input()
  actualUserId: number;

  @Output()
  closeEvent = new EventEmitter<boolean>();
  detailsTab: string[] = ["Vehicles"];

  constructor() {
  }

  onClose() {
    this.closeEvent.emit(true);
  }


  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
