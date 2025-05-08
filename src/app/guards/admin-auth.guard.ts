import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const adminPassword = 'admin123'; // Set the password for admin

    // Prompt the user to enter the password
    const enteredPassword = prompt('Please enter the admin password to access the Dashboard:');

    if (enteredPassword === adminPassword) {
      return true; // Allow access if the password is correct
    } else {
      alert('Incorrect password! You cannot access the dashboard.');
      this.router.navigate(['/home']); // Redirect to home if the password is incorrect
      return false; // Deny access
    }
  }
}
