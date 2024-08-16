import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { ProductListComponent } from './page/product-list/product-list.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, PanelRoutingModule, MaterialModule],
})
export class PanelModule {}
