import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css'],
})
export class AddPopUpComponent implements OnInit {
  
  closeButtonFunction: Function = () => this.onNoClick();

  constructor(private dialogRef: MatDialogRef<AddPopUpComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
