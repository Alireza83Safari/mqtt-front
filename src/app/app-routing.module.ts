import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './core/layout/portal-layout/portal-layout.component';
import { AuthGuard } from './core/services/auth-gaurd.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'portal',
    component: PanelLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/portal/portal.module').then((m) => m.PortalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
