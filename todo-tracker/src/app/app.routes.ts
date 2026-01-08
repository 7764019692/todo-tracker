
import { Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login.page';
import { SignupComponent } from './pages/signup/signup.page';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.page';
import { TermsComponent } from './pages/terms-conditions/terms-conditions.page';
import { PrivacyComponent } from './pages/privacy-policy/privacy-policy.page';
import { AboutComponent } from './pages/about-us/about-us.page';
import { ContactComponent } from './pages/contact-us/contact-us.page';
import { HomeComponent } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: 'login' } 
];