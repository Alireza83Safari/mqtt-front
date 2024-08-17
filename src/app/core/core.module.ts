import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PanelLayoutComponent } from './layout/portal-layout/portal-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, PanelLayoutComponent, SidebarComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [HeaderComponent, PanelLayoutComponent, SidebarComponent],
})
export class CoreModule {}
