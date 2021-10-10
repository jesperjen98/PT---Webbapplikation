import { ProgramPageComponent } from './pages/member-page/pages/program-page/program-page.component';
import { ProgramsPageComponent } from './pages/member-page/pages/programs-page/programs-page.component';
import { SettingsPageComponent } from './pages/member-page/pages/settings-page/settings-page.component';
import { MemberHomePageComponent } from './pages/member-page/pages/member-home-page/member-home-page.component';
import { HealthDeclarationPageComponent } from './pages/member-page/pages/health-declaration-page/health-declaration-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
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
    path: 'services',
    component: ServicesPageComponent,
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
    children: [
      {
        path: '',
        component: MemberHomePageComponent,
      },
      {
        path: 'healthDeclaration',
        component: HealthDeclarationPageComponent,
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
      {
        path: 'programs',
        component: ProgramsPageComponent,
      },
      {
        path: 'programs/:programId',
        component: ProgramPageComponent,
      },
    ],
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
