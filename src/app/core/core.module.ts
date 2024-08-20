import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PanelLayoutComponent } from './layout/portal-layout/portal-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableSpinnerComponent } from './components/table-spinner/table-spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PanelLayoutComponent,
    SidebarComponent,
    ModalComponent,
    PaginationComponent,
    TableSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    PanelLayoutComponent,
    SidebarComponent,
    ModalComponent,
    PaginationComponent,
    TableSpinnerComponent,
  ],
})
export class CoreModule {}
