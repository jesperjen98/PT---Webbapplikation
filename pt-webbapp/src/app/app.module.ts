import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberPageComponent } from './pages/member-page/member-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardNavigationComponent } from './pages/member-page/components/card-navigation/card-navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MemberPageComponent,
    NavbarComponent,
    CardNavigationComponent,
    HomePageComponent,
    PageFooterComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
