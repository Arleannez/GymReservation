import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all the page components used in routing
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { AboutComponent } from './pages/about/about.component';

// Define application routes
const routes: Routes = [
  {
    // Redirect the empty path to the login page
    path: '',
    redirectTo: 'login',
    pathMatch: 'full', // ensures exact match before redirect
  },
  {
    // Route for login page
    path: 'login',
    component: LoginComponent,
  },
  {
    // Main layout route that wraps the inner app views
    path: '',
    component: LayoutComponent, // layout typically contains navbar/sidebar
    children: [
      {
        // Home route under layout
        path: 'home',
        component: HomeComponent,
      },
      {
        // Route for reservations page
        path: 'reservations',
        component: ReservationsComponent,
      },
      {
        // Route for about page
        path: 'about',
        component: AboutComponent,
      },
      {
        // Route for admin dashboard
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

// Register the routes with the Angular router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
