import {Component, OnInit} from '@angular/core';
import {CostReportsHttpService} from "../../sdk/reports/cost-reports-http.service";
import {FleetChart} from "../../common/chart/fleet-chart";
import {CostParams} from "../../sdk/reports/cost-params";
import {CostReportsFleetChartFactory} from "./cost-reports-fleet-chart-factory";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  fleetChart: FleetChart

  constructor(private costReportsService: CostReportsHttpService,
              private costReportsChartFactory: CostReportsFleetChartFactory) {
  }

  ngOnInit(): void {
    this.costReportsService.getCost(new CostParams()).then(data => this.fleetChart = this.costReportsChartFactory.create(data))
  }

}
