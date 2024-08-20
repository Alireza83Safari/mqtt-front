import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexGrid,
  ApexYAxis,
  ApexTooltip,
  ChartType,
} from 'ng-apexcharts';
import { SensorsChart } from 'src/app/core/models/battery';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-sensor-chart',
  templateUrl: './sensor-chart.component.html',
})
export class SensorChartComponent implements OnChanges {
  public chartOptions: Partial<ChartOptions> | any;

  @Input() chartData!: SensorsChart[];
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
      const battState = this.chartData.map((data) => data.battState);
      const gridState = this.chartData.map((data) => data.gridState);
      const meterState = this.chartData.map((data) => data.meterState);
      const pvState = this.chartData.map((data) => data.pvState);

      this.chartOptions.series = [
        { name: 'Battery State', data: battState },
        { name: 'Grid State', data: gridState },
        { name: 'Meter State', data: meterState },
        { name: 'PV State', data: pvState },
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
