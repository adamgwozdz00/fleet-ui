import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {FleetChart} from "./fleet-chart";

Chart.register(...registerables);

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  @Input()
  fleetChart: FleetChart;


  constructor(private changeDetectionRef: ChangeDetectorRef) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.fleetChart && changes.fleetChart) {
      this.changeDetectionRef.detectChanges()
      new Chart(this.fleetChart.id, {
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
}
