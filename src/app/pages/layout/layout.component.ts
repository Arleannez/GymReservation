import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service'; // ✅ Make sure path is correct

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // <-- Note: 'styleUrls' not 'styleUrl'
})
export class LayoutComponent {
  loggedUser: any;

  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService // ✅ Inject the service
  ) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  // Handle Navigation Programmatically
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  // Log Off the User
  onLogoff() {
    this.adminAuthService.logout(); // ✅ Call logout from service
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
