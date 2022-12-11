import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HeaderRow, Row} from "../../../common/fleet-table/row";
import {Title} from "../../../common/fleet-table/title";
import {UsersHttpService} from "../../../sdk/users/users-http.service";

@Component({
  selector: 'user-vehicles',
  templateUrl: './user-vehicles.component.html',
  styleUrls: ['./user-vehicles.component.css']
})
export class UserVehiclesComponent implements OnChanges {

  @Input()
  userId: string = "";

  title = new Title("Vehicles")
  headerRow: HeaderRow = HeaderRow.createForColumnTitles(["id","make","model","production year"]);
  rows: Row[] = [];


  constructor(private userService : UsersHttpService) {
  }

  ngOnChanges(): void {

  }

}
