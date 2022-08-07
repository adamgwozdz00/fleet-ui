import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fleet-pop-up',
  templateUrl: './fleet-pop-up.component.html',
  styleUrls: ['./fleet-pop-up.component.css'],
})
export class FleetPopUpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FleetPopUpComponent>) { }

  ngOnInit(): void {
  }

}
