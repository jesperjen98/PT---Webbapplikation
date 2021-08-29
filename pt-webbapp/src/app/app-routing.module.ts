import { AdminGuard } from './guards/admin.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { Roles } from './models/roles';
import { UserGuard } from './guards/user.guard';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signUp',
    component: SignUpPageComponent,
  },
  {
    path: Roles.User,
    component: MemberPageComponent,
    canActivate: [UserGuard],
  },
  {
    path: Roles.Admin,
    component: AdminPageComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
