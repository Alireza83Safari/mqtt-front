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
import { ReactiveFormsModule } from '@angular/forms';
import { EditBatteryComponent } from './components/edit-battery/edit-battery.component';

@NgModule({
  declarations: [
    UserComponent,
    DeviceComponent,
    BatteryComponent,
    DeviceTableComponent,
    BatteryTableComponent,
    EditDeviceComponent,
    EditBatteryComponent,
  ],
  imports: [CommonModule, PanelRoutingModule, CoreModule, ReactiveFormsModule],
})
export class PortalModule {}
