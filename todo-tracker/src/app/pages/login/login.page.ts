import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add RouterModule here
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    if (this.credentials.email && this.credentials.password) {
      console.log('Login attempted with:', this.credentials);
      
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', this.credentials.email);
      
      this.showLoginSuccess();
      
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    }
  }

  private showLoginSuccess() {
    console.log('Login successful!');
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  fillDemoCredentials() {
    this.credentials.email = 'demo@example.com';
    this.credentials.password = 'password';
  }
}