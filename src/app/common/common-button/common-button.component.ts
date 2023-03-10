import {Component, Input, OnInit} from '@angular/core';
import {ButtonDetails} from './button-details';

@Component({
  selector: 'common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.css'],
})
export class TableButtonComponent implements OnInit {
  @Input() buttonTitle: string = 'button';
  @Input() rowButton: ButtonDetails = new ButtonDetails();

  constructor() {
  }

  @Input() buttonFunction: Function = () => console.log('button event');

  ngOnInit(): void {
    if (!this.rowButton.isEmpty()) {
      this.buttonTitle = this.rowButton.buttonTitle;
      this.buttonFunction = this.rowButton.event;
    }
  }
}
