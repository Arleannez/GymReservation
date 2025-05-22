import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service'; // ✅ Ensure correct path

// ✅ Interface should be declared outside the @Component block
export interface User {
  email: string;
  name?: string; // Optional
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  loggedUser: User | null = null; // Use the interface here

  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {
    const localUser = localStorage.getItem('loggedUser');
    if (localUser) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  // Navigate to a route
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  //Log off
  onLogoff(): void {
    this.adminAuthService.logout();
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
