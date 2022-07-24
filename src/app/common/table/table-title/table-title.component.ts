import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TableTitle } from '../table-title';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.css'],
})
export class TableTitleComponent implements OnInit {
  @Input() tableTitle: TableTitle = new TableTitle();

  constructor() {}

  ngOnInit(): void {
  }
}
