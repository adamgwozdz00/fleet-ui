import {Component, Input, OnChanges} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {ChartType, FleetChart} from "./fleet-chart";

Chart.register(...registerables);

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  @Input()
  fleetChart: FleetChart = {type: ChartType.BAR, data: [], label: "", title: ""}

  constructor() {
  }

  ngOnChanges(): void {
    const myChart = new Chart(this.fleetChart.title, {
      type: this.fleetChart.type,
      data: {
        labels: this.fleetChart.data.map(d => d.label),
        datasets: [{
          label: this.fleetChart.label,
          data: this.fleetChart.data.map(d => d.value),
          backgroundColor: this.fleetChart.data.map(d => d.backgroundColor),
          borderColor: this.fleetChart.data.map(d => d.borderColor),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: this.fleetChart.title
          }
        }
      }
    });
  }


}
