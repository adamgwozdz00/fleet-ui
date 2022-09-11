import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {
  subscription: Subscription;

  @Input()
  title: string = '';

  @Input()
  isOpen: boolean = false;

  @Input()
  centerTray: boolean = false;

  @Output()
  onClose = new EventEmitter();

  constructor(private router: Router) {
    // close on router change
    this.subscription = router.events.subscribe(() => this.close())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close() {
    this.isOpen = false;
    this.onClose.emit()
  }
}
