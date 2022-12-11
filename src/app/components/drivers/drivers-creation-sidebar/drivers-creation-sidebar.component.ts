import {Component, EventEmitter, Input, OnInit, Output,} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DriversHttpService} from "../../../sdk/drivers/drivers-http.service";

@Component({
  selector: "drivers-creation-sidebar",
  templateUrl: "./drivers-creation-sidebar.component.html",
  styleUrls: ["./drivers-creation-sidebar.component.css"],
})
export class DriversCreationSidebarComponent implements OnInit {
  @Input()
  isOpen: boolean = false;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  @Output()
  reloadDrivers = new EventEmitter<boolean>();

  titleOptions = ["JUNIOR", "SENIOR"];

  driversForm = new FormGroup({
    lastName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    seniority: new FormControl(undefined, Validators.required),
    title: new FormControl("", Validators.required),
  });

  constructor(
    private readonly service: DriversHttpService
  ) {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  createDriver() {
    const values = this.driversForm.value;
    this.service
    .createDriver({
      lastName: values.lastName,
      firstName: values.firstName,
      seniorityInYears: values.seniority,
    })
    .then(() => this.reloadDrivers.emit(true));
  }

  ngOnInit(): void {
    // this.service
    //   .getFuelTypes()
    //   .then((result) => (this.fuelTypesOptions = result));
  }
}
