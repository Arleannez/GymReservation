import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import your components here
import { LoginComponent } from './pages/login/login.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservationsComponent,
    AdminComponent,
    DashboardComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
