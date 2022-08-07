import { Component, OnInit } from '@angular/core';
import { FleetPopUpComponent } from './fleet-pop-up/fleet-pop-up.component';
import { FleetTableComponent } from './fleet-table/fleet-table.component';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css'],
})
export class FleetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
