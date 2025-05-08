import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private isAdmin: boolean = false; // This can be used to check if the user is an admin

  constructor() {}

  // Function to simulate login as admin
  loginAsAdmin() {
    // Set the admin flag to true, or save this to localStorage/sessionStorage if you need persistence
    this.isAdmin = true;
    localStorage.setItem('isAdmin', 'true');
  }

  // Function to check if the user is logged in as an admin
  isAdminLoggedIn(): boolean {
    // Check localStorage or internal state
    return localStorage.getItem('isAdmin') === 'true';
  }

  // Logout function
  logout() {
    this.isAdmin = false;
    localStorage.removeItem('isAdmin');
  }
}
