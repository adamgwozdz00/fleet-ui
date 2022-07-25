import { Component, Input, OnInit } from '@angular/core';
import { RowButton } from '../row-button';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.css'],
})
export class TableButtonComponent implements OnInit {
  @Input() buttonTitle: string = 'button';
  @Input() buttonFunction: Function = () => console.log('button event');
  @Input() rowButton: RowButton = new RowButton();

  constructor() {}

  ngOnInit(): void {
    if (!this.rowButton.isEmpty()) {
      this.buttonTitle = this.rowButton.buttonTitle;
      this.buttonFunction = this.rowButton.event;
    }
  }
}
