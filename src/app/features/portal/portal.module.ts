import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './portal-routing.module';
import { UserComponent } from './page/user/user.component';
import { DeviceComponent } from './page/device/device.component';
import { BatteryComponent } from './page/battery/battery.component';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import { BatteryTableComponent } from './components/battery-table/battery-table.component';
import { EditDeviceComponent } from './components/edit-device/edit-device.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBatteryComponent } from './components/edit-battery/edit-battery.component';
import { BatteryDetailsComponent } from './page/battery-details/battery-details.component';
import { SensorChartComponent } from './components/sonsor-chart/sensor-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BatterySensorsComponent } from './components/battery-sensors/battery-sensors.component';
import { DeviceMetricsComponent } from './components/device-metrics/device-metrics.component';
import { DeviceDetailsComponent } from './page/device-details/device-details.component';
import { MetricsChartComponent } from './components/metrics-chart/metrics-chart.component';
import { MetricsChartContainerComponent } from './components/metrics-chart-container/metrics-chart-container.component';
import { BatteryChartContainerComponent } from './components/battery-chart-container/battery-chart-container.component';

@NgModule({
  declarations: [
    UserComponent,
    DeviceComponent,
    BatteryComponent,
    DeviceTableComponent,
    BatteryTableComponent,
    EditDeviceComponent,
    EditBatteryComponent,
    BatteryDetailsComponent,
    BatteryChartContainerComponent,
    SensorChartComponent,
    BatterySensorsComponent,
    DeviceMetricsComponent,
    DeviceDetailsComponent,
    MetricsChartComponent,
    MetricsChartContainerComponent,
    BatteryChartContainerComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FormsModule,
  ],
})
export class PortalModule {}
