import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {DialogModule} from '@angular/cdk/dialog';

@NgModule({
  exports: [
    MatTableModule,
    MatDialogModule,
    DialogModule,
    MatNativeDateModule,
  ]
})
export class AppMaterialModule {}