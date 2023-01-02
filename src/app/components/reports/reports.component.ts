import {Component, OnInit} from '@angular/core';
import {CostReportsHttpService} from "../../sdk/reports/cost-reports-http.service";
import {FleetChart} from "../../common/chart/fleet-chart";
import {CostParams} from "../../sdk/reports/cost-params";
import {CostReportsFleetChartFactory} from "./cost-reports-fleet-chart-factory";
import {YearlyCostDTO} from "../../sdk/reports/cost.dto";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  servicesSpendChart: FleetChart
  monthlyFuelSpendChart: FleetChart

  constructor(private costReportsService: CostReportsHttpService,
              private costReportsChartFactory: CostReportsFleetChartFactory) {
  }

  ngOnInit(): void {
    this.costReportsService.getCost(new CostParams()).then(data => this.servicesSpendChart = this.costReportsChartFactory.createServicesSpendChart(data))
    Promise.all(this.getYearlyCost()).then(data => this.monthlyFuelSpendChart = this.costReportsChartFactory.createYearlyFuelSpend(data))
  }

  getYearlyCost(): Promise<YearlyCostDTO>[] {
    const yearlyCost$: Promise<YearlyCostDTO>[] = [];

    for (let year of this.getFiveYears()) {
      yearlyCost$.push(this.costReportsService.getCost(new CostParams([year])).then(cost => ({
        year: year,
        cost: cost
      })));
    }

    return yearlyCost$;
  }

  private getFiveYears(): number[] {
    const actualYear = new Date().getFullYear();
    return [actualYear - 4, actualYear - 3, actualYear - 2, actualYear - 1, actualYear];
  }

}
