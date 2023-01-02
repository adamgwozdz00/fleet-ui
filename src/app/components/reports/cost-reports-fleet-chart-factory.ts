import {Injectable} from "@angular/core";
import {CostDTO, YearlyCostDTO} from "../../sdk/reports/cost.dto";
import {ChartType, FleetChart} from "../../common/chart/fleet-chart";

@Injectable({providedIn: "root"})
export class CostReportsFleetChartFactory {
  createServicesSpendChart(cost: CostDTO): FleetChart {
    return {
      title: "Services spend total : " + (cost.overviewCostData.cost + cost.insuranceCostData.cost + cost.repairCostData.cost) + " €",
      type: ChartType.DOUGHNUT,
      label: "cost €",
      data: [
        {
          label: 'overview',
          value: cost.overviewCostData.cost,
          borderColor: 'rgba(169,169,169,1)',
          backgroundColor: 'rgba(169,169,169,0.6)',
        },
        {
          label: 'insurance',
          value: cost.insuranceCostData.cost,
          borderColor: 'rgba(255, 134, 0,1)',
          backgroundColor: 'rgba(255, 134, 0,0.6)',
        },
        {
          label: 'repair',
          value: cost.repairCostData.cost,
          borderColor: 'rgba(39, 24, 126,1)',
          backgroundColor: 'rgba(39, 24, 126,0.6)',
        }
      ]
    }
  }

  createYearlyFuelSpend(costs: YearlyCostDTO[]): FleetChart {
    return {
      title: "Fuel Yearly Spend €",
      type: ChartType.BAR,
      label: "cost €",
      data: costs.map(cost => ({
        label: cost.year + "",
        value: cost.cost.fuelCostData.cost,
        borderColor: 'rgba(39, 24, 126,1)',
        backgroundColor: 'rgba(39, 24, 126,0.6)',
      }))
    }
  }
}
