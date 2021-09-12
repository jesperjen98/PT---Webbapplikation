import { firebaseConfig } from './../environments/firebaseConfig';
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
import { AngularFireModule } from '@angular/fire';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import firebase from 'firebase';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AboutMeComponent } from './pages/home-page/components/about-me/about-me.component';
import { ContactMeComponent } from './pages/home-page/components/contact-me/contact-me.component';
import { StartComponent } from './pages/home-page/components/start/start.component';
import { ProcessComponent } from './pages/home-page/components/process/process.component';
import { MyServicesComponent } from './pages/home-page/components/my-services/my-services.component';
import { FaqComponent } from './pages/home-page/components/faq/faq.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MemberPageComponent,
    NavbarComponent,
    CardNavigationComponent,
    HomePageComponent,
    PageFooterComponent,
    SignUpPageComponent,
    AdminPageComponent,
    AboutMeComponent,
    ContactMeComponent,
    StartComponent,
    ProcessComponent,
    MyServicesComponent,
    FaqComponent,
    ServicesPageComponent,
  ],

  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
