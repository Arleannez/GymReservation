import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignDivVisiable: boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) {}

  ngOnInit() {
    // Optional: preload admin if not in localStorage
    const existingAdmin = localStorage.getItem('adminExists');
    if (!existingAdmin) {
      const adminUser = {
        name: 'Admin',
        email: 'admin@site.com',
        password: 'admin123',
        role: 'admin'
      };
      const localUsers = JSON.parse(localStorage.getItem('angular17users') || '[]');
      localUsers.push(adminUser);
      localStorage.setItem('angular17users', JSON.stringify(localUsers));
      localStorage.setItem('adminExists', 'true');
    }
  }

  // Register new user (non-admins only)
  onRegister() {
    const localUser = localStorage.getItem('angular17users');
    this.signUpObj.role = 'user'; // Register as regular user only

    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }

    alert('Registration Success');
  }

  // Login logic
  onLogin() {
    // Check if it's the built-in admin
    if (
      this.loginObj.email === 'admin@site.com' &&
      this.loginObj.password === 'admin123'
    ) {
      const adminUser = {
        name: 'Admin',
        email: 'admin@site.com',
        role: 'admin'
      };
      localStorage.setItem('loggedUser', JSON.stringify(adminUser));
      alert("Logged in as Admin");
      this.router.navigateByUrl('/admin');
      return;
    }

    // Otherwise, check local users
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);

      const foundUser = users.find((user: SignUpModel) =>
        user.email === this.loginObj.email && user.password === this.loginObj.password
      );

      if (foundUser) {
        localStorage.setItem('loggedUser', JSON.stringify(foundUser));
        alert(`Logged in as ${foundUser.role}`);
        this.router.navigateByUrl(foundUser.role === 'admin' ? '/admin' : '/dashboard');
      } else {
        alert("No User Found");
      }
    }
  }
}

// Models
export class SignUpModel {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.role = "user";
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}
