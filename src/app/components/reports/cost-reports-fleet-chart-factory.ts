import {Injectable} from "@angular/core";
import {CostDTO, YearlyCostDTO} from "../../sdk/reports/cost.dto";
import {ChartType, FleetChart} from "../../common/chart/fleet-chart";

@Injectable({providedIn: "root"})
export class CostReportsFleetChartFactory {
  createServicesSpendChart(cost: CostDTO): FleetChart {
    return {
      id: "chart1",
      title: "Services spend total : " + (cost.overviewCost.cost + cost.insuranceCost.cost + cost.repairCost.cost) + " €",
      type: ChartType.DOUGHNUT,
      label: "cost €",
      data: [
        {
          label: 'overview',
          value: cost.overviewCost.cost,
          borderColor: 'rgba(169,169,169,1)',
          backgroundColor: 'rgba(169,169,169,0.6)',
        },
        {
          label: 'insurance',
          value: cost.insuranceCost.cost,
          borderColor: 'rgba(255, 134, 0,1)',
          backgroundColor: 'rgba(255, 134, 0,0.6)',
        },
        {
          label: 'repair',
          value: cost.repairCost.cost,
          borderColor: 'rgba(39, 24, 126,1)',
          backgroundColor: 'rgba(39, 24, 126,0.6)',
        }
      ]
    }
  }

  createYearlyFuelSpend(costs: YearlyCostDTO[]): FleetChart {
    return {
      id: "chart2",
      title: "Fuel Yearly Spend €",
      type: ChartType.BAR,
      label: "cost €",
      data: costs.map(cost => ({
        label: cost.year + "",
        value: cost.cost.fuelCost.cost,
        borderColor: 'rgba(39, 24, 126,1)',
        backgroundColor: 'rgba(39, 24, 126,0.6)',
      }))
    }
  }
}
