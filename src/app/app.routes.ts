import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuctionComponent } from './pages/auction/auction.component';
import { ArtworkDetailsComponent } from './pages/artwork-details/artwork-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LearnComponent } from './pages/learn/learn.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth.guard';  // Import the AuthGuard

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auction', component: AuctionComponent,canActivate: [AuthGuard] },  // Protected route
  { path: 'artwork-details/:id', component: ArtworkDetailsComponent , canActivate: [AuthGuard]},  // Protected route
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'learn-more', component: LearnComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: NotFoundComponent },  // Catch-all for 404
];