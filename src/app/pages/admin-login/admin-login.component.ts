import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
  adminPassword: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.adminPassword === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }
  }
}
