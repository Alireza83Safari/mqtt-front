import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './page/user/user.component';
import { PageRoutes } from 'src/app/core/routes/pageRoutes';
import { BatteryComponent } from './page/battery/battery.component';
import { DeviceComponent } from './page/device/device.component';
import { BatteryDetailsComponent } from './page/battery-details/battery-details.component';
import { DeviceDetailsComponent } from './page/device-details/device-details.component';

const routes: Routes = [
  { path: PageRoutes.USER, component: UserComponent },
  { path: PageRoutes.BATTERY, component: BatteryComponent },
  { path: PageRoutes.DEVICE, component: DeviceComponent },
  { path: PageRoutes.BATTERY_SENSOR, component: BatteryDetailsComponent },
  { path: PageRoutes.DEVICE_METRIC, component: DeviceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
