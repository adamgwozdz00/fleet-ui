import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  DRIVERS_SERVICE,
  DriversService,
} from "./../../../sdk/drivers/drivers.service";

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
  reloadDriverss = new EventEmitter<boolean>();

  titleOptions = ["JUNIOR", "SENIOR"];

  driversForm = new FormGroup({
    last_name: new FormControl("", Validators.required),
    first_name: new FormControl("", Validators.required),
    seniority: new FormControl(undefined, Validators.required),
    title: new FormControl("", Validators.required),
  });

  constructor(
    @Inject(DRIVERS_SERVICE) private readonly service: DriversService
  ) {}

  onClose() {
    this.closeEvent.emit(true);
  }

  createDriver() {
    const values = this.driversForm.value;
    // this.service
    //   .create({
    //     last_name: values.last_name,
    //     first_name: values.first_name,
    //     seniority: values.seniority,
    //     title: values.title
    //   })
    //   .then(() => this.reloadDriverss.emit(true));
  }

  ngOnInit(): void {
    // this.service
    //   .getFuelTypes()
    //   .then((result) => (this.fuelTypesOptions = result));
  }
}
