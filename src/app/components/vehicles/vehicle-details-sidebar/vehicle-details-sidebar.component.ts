import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {
  InsuranceDetailsDTO,
  InsurancesDetailsDTO,
} from "src/app/sdk/vehicles/vehicle-details/insurances-details.dto";
import {
  OverviewDetailsDTO,
  OverviewsDetailsDTO,
} from "src/app/sdk/vehicles/vehicle-details/overviews-details.dto";
import {
  VehicleDetailsHttpService
} from "src/app/sdk/vehicles/vehicle-details/vehicle-details-http.service";

@Component({
  selector: "vehicle-details-sidebar",
  templateUrl: "./vehicle-details-sidebar.component.html",
  styleUrls: ["./vehicle-details-sidebar.component.css"],
})
export class VehicleDetailsSidebarComponent implements OnInit, OnChanges {
  @Input()
  isOpen: boolean = false;

  @Input()
  actualVehicleId: string;

  @Output()
  closeEvent = new EventEmitter<boolean>();

  detailsTab: string[] = [
    "Driver History",
    "Insurance History",
    "Review History",
    "Current Review",
    "Current Insurance",
  ];
  protected overviewVehicle: OverviewsDetailsDTO;
  protected insuranceVehicle: InsurancesDetailsDTO;

  constructor(
    private readonly vehicleDetailsService: VehicleDetailsHttpService
  ) {
  }

  onClose() {
    this.closeEvent.emit(true);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.vehicleDetailsService
    .getOverviewHistory(this.actualVehicleId, true)
    .then((e) => (this.overviewVehicle = e));
    this.vehicleDetailsService
    .getInsuranceHistory(this.actualVehicleId, true)
    .then((e) => (this.insuranceVehicle = e));
  }

  get overviewWarning(): OverviewDetailsDTO | undefined {
    return this.overviewVehicle?.overviewDetails.find(
      (e) =>
        this.isCloseToExpire(e.expirationDate)
    );
  }

  get insuranceWarning(): InsuranceDetailsDTO | undefined {
    return this.insuranceVehicle?.insuranceDetails.find(
      (e) =>
        this.isCloseToExpire(e.insuranceExpirationDate)
    );
  }

  isCloseToExpire(date: string) {
    const expirationDate = new Date(date);
    const monthInMillis = 1000 * 60 * 60 * 24 * 30;
    return expirationDate.getTime() < new Date().getTime() + monthInMillis;
  }
}
