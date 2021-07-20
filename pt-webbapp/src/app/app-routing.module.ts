import { MemberPageComponent } from './member-page/member-page.component';
/**
 * AppRoutingModule
 *
 * @author Johan Ehinger (https://github.com/johanehinger)
 */

import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'member',
    component: MemberPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
