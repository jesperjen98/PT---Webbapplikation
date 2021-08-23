import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
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

var firebaseConfig = {
  apiKey: 'AIzaSyAX2LfMf1kkZT-lY7z-GVWoA_9OwLw2j0Y',
  authDomain: 'pt-webapplication.firebaseapp.com',
  projectId: 'pt-webapplication',
  storageBucket: 'pt-webapplication.appspot.com',
  messagingSenderId: '3798329940',
  appId: '1:3798329940:web:761808928233aa716fdbc1',
  measurementId: 'G-7322GWDV5Y',
};

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
