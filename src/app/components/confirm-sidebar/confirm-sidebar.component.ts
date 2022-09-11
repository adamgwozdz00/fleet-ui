import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-sidebar',
  templateUrl: './confirm-sidebar.component.html',
  styleUrls: ['./confirm-sidebar.component.scss']
})
export class ConfirmSidebarComponent {
  @Input()
  isOpen: boolean = false;

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  buttonLabel: string;

  @Output()
  onButtonClick = new EventEmitter();
  
  @Output()
  onClose = new EventEmitter();

  onCloseSidebar() {
    this.isOpen = false;
    this.onClose.emit()
  }

  buttonClick() {
    this.onButtonClick.emit();
  }
}