import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './portal-routing.module';
import { UserComponent } from './page/user/user.component';
import { DeviceComponent } from './page/device/device.component';
import { BatteryComponent } from './page/battery/battery.component';

@NgModule({
  declarations: [
    UserComponent,
    DeviceComponent,
    BatteryComponent
  ],
  imports: [CommonModule, PanelRoutingModule],
})
export class PortalModule {}
