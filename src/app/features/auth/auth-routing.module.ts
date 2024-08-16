import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PageRoutes } from 'src/app/core/routes/pageRoutes';

const routes: Routes = [
  { path: PageRoutes.LOGIN, component: LoginComponent },
  { path: PageRoutes.REGISTER, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
