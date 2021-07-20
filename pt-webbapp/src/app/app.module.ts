import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberPageComponent } from './member-page/member-page.component';
import { NavbarComponent } from './member-page/components/navbar/navbar.component';
import { CardNavigationComponent } from './member-page/components/card-navigation/card-navigation.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MemberPageComponent, NavbarComponent, CardNavigationComponent],
  imports: [ReactiveFormsModule, BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
