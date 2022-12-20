import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  InsuranceDetailsDTO,
  InsurancesDetailsDTO,
} from "src/app/sdk/vehicles/vehicle-details/insurances-details.dto";
import {
  OverviewDetailsDTO,
  OverviewsDetailsDTO,
} from "src/app/sdk/vehicles/vehicle-details/overviews-details.dto";
import { VehicleDetailsHttpService } from "src/app/sdk/vehicles/vehicle-details/vehicle-details-http.service";

@Component({
  selector: "vehicle-details-sidebar",
  templateUrl: "./vehicle-details-sidebar.component.html",
  styleUrls: ["./vehicle-details-sidebar.component.css"],
})
export class VehicleDetailsSidebarComponent implements OnInit {
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
  ) {}

  onClose() {
    this.closeEvent.emit(true);
  }

  ngOnInit(): void {}

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
        new Date(e.expirationDate) > new Date() &&
        new Date(e.expirationDate).getFullYear() ===
          new Date().getFullYear() + 2
    );
  }

  get insuranceWarning(): InsuranceDetailsDTO | undefined {
    return this.insuranceVehicle?.insuranceDetails.find(
      (e) =>
        new Date(e.insuranceExpirationDate) > new Date() &&
        new Date(e.insuranceExpirationDate).getFullYear() ===
          new Date().getFullYear() + 2
    );
  }
}
