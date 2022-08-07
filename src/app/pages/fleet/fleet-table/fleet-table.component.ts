import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Column } from 'src/app/common/table/column';
import { TableTitle } from 'src/app/common/table/table-title';
import { FleetPopUpComponent } from 'src/app/pages/fleet/fleet-pop-up/fleet-pop-up.component';
import { FleetTableRow, FleetTableService } from '../../../sdk/fleet/fleet-table.service';

@Component({
  selector: 'app-fleet-table',
  templateUrl: './fleet-table.component.html',
  styleUrls: ['./fleet-table.component.css'],
})
export class FleetTableComponent implements OnInit {
  rows: FleetTableRow[] = [];
  columns: Column[] = [];
  title = new TableTitle('Fleet');
  addButtonFucntion: Function;

  constructor(private readonly tableService: FleetTableService, private readonly dialog: MatDialog ) {
    this.tableService.getRows().then((rows) => (this.rows = rows));
    this.tableService.getColumns().then((cols) => (this.columns = cols));
    this.addButtonFucntion = () => this.dialog.open(FleetPopUpComponent, {
      width: '250px',
      enterAnimationDuration:'0ms',
      exitAnimationDuration:'0ms',
      data:{}
    });
  }

  ngOnInit(): void {}
}
