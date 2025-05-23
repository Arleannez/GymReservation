import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import all the page components used in routing
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './admin/admin.component';


// Define application routes
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];



// Register the routes with the Angular router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
