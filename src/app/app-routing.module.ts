import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './core/layout/panel-layout/panel-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'portal',
    component: PanelLayoutComponent,
    loadChildren: () =>
      import('./features/portal/portal.module').then((m) => m.PortalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
