import {Injectable} from "@angular/core";
import {CostDTO} from "../../sdk/reports/cost.dto";
import {ChartType, FleetChart} from "../../common/chart/fleet-chart";

@Injectable({providedIn: "root"})
export class CostReportsFleetChartFactory {
  create(cost: CostDTO): FleetChart {
    return {
      title: "Fleet all time spend total : " + cost.totalCost + " €",
      type: ChartType.DOUGHNUT,
      label: "cost",
      data: [
        {
          label: 'fuel',
          value: cost.fuelCostData.cost,
          borderColor: 'rgba(39, 24, 126,1)',
          backgroundColor: 'rgba(39, 24, 126,0.6)',
        },
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
        }
      ]
    }
  }
}
