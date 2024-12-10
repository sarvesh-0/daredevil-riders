import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PastToursComponent } from './past-tours/past-tours.component';
import { FutureToursComponent } from './future-tours/future-tours.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'past-tours', component: PastToursComponent },
  { path: 'future-tours', component: FutureToursComponent },
  { path: 'about-us', component: AboutUsComponent },
];
