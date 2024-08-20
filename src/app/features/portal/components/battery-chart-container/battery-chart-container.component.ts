import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'ng-apexcharts';
import { ChartTimes } from 'src/app/core/constants/constants';
import { SensorsChart } from 'src/app/core/models/battery';
import { BatteryService } from 'src/app/core/services/battery.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-battery-chart-container',
  templateUrl: './battery-chart-container.component.html',
})
export class BatteryChartContainerComponent {
  chartTimes = ChartTimes;
  _activeChartTime = 'minute';
  id!: string;
  chartData!: SensorsChart[];

  _fromDate = '';
  _toDate = '';
  datesInitialized = false;

  chartType: ChartType = 'line';

  get fromDate() {
    return this._fromDate;
  }

  set fromDate(time: string) {
    this._fromDate = time;

    if (this.datesInitialized) {
      this.getChartData();
    }
  }

  get activeChartTime() {
    return this._activeChartTime;
  }

  set activeChartTime(time: string) {
    this._activeChartTime = time;

    if (this.datesInitialized) {
      this.getChartData();
    }
  }

  get toDate() {
    return this._toDate;
  }

  set toDate(time: string) {
    this._toDate = time;

    if (this.datesInitialized) {
      this.getChartData();
    }
  }

  constructor(
    private utilsService: UtilsService,
    private batteryService: BatteryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fromDate = this.utilsService.getCurrentDateTime(-1);
    this.toDate = this.utilsService.getCurrentDateTime();
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.datesInitialized = true;
    if (this.fromDate) {
      this.getChartData();
    }
  }

  getChartData() {
    this.batteryService
      .getBatterySensorsChart({
        params: {
          fromDate: new Date(this.fromDate).toISOString(),
          toDate: new Date(this.toDate).toISOString(),
          interval: 'hour',
          intervalValue: 1,
          limit: 6,
        },
        id: this.id,
      })
      .subscribe((res) => {
        this.chartData = res.result;
      });
  }

  setChartTime(time: string) {
    this.activeChartTime = time;
  }

  setChartType(type: ChartType) {
    this.chartType = type;
  }
}
