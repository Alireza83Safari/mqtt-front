import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent, PanelLayoutComponent],
  imports: [CommonModule, BrowserModule],
  exports: [HeaderComponent, PanelLayoutComponent],
})
export class CoreModule {}
