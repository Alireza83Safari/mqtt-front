import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions } from '../sonsor-chart/sensor-chart.component';
import { MetricsChart } from 'src/app/core/models/device';
import { ChartType } from 'ng-apexcharts';

@Component({
  selector: 'app-metrics-chart',
  templateUrl: './metrics-chart.component.html',
})
export class MetricsChartComponent implements OnChanges {
  public chartOptions: Partial<ChartOptions> | any;

  @Input() chartData!: MetricsChart[];
  @Input() chartType!: ChartType;

  constructor() {
    this.chartOptions = {
      chart: {
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.chartData) {
      const times = this.chartData.map((data) =>
        new Date(data.time).toLocaleTimeString()
      );
      const battState = this.chartData.map((data) => data.socAvg);
      const gridState = this.chartData.map((data) => data.voltageAvg);
      const meterState = this.chartData.map((data) => data.currentAvg);

      this.chartOptions.series = [
        { name: 'socAvg', data: battState },
        { name: 'voltageAvg', data: gridState },
        { name: 'currentAvg', data: meterState },
      ];

      this.chartOptions.xaxis = {
        categories: times,
      };
    }

    if (changes['chartType']) {
      this.chartOptions.chart = {
        type: this.chartType,
      };
    }
  }
}
