// src/app/pages/signup/signup.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  };

  passwordStrengthText = '';
  passwordStrengthClass = '';
  errorMessage = '';
  isSubmitting = false;

  constructor(private router: Router) {}

  signup() {
    if (!this.isFormValid()) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    if (!this.passwordsMatch()) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (!this.user.agreeToTerms) {
      this.errorMessage = 'Please agree to the Terms & Conditions.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // Simulate API call
    setTimeout(() => {
      try {
        // Store user data in localStorage (in real app, this would be an API call)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', this.user.email);
        localStorage.setItem('userName', this.user.name);
        
        if (this.user.subscribeNewsletter) {
          localStorage.setItem('subscribedToNewsletter', 'true');
        }

        console.log('User registered:', this.user);
        this.showSuccessMessage();
        
        // Navigate to home page
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);

      } catch (error) {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      } finally {
        this.isSubmitting = false;
      }
    }, 1000);
  }

  checkPasswordStrength() {
    const password = this.user.password;
    if (!password) {
      this.passwordStrengthText = '';
      this.passwordStrengthClass = '';
      return;
    }

    // Simple password strength check
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
      case 0:
      case 1:
        this.passwordStrengthText = 'Weak';
        this.passwordStrengthClass = 'weak';
        break;
      case 2:
        this.passwordStrengthText = 'Fair';
        this.passwordStrengthClass = 'fair';
        break;
      case 3:
        this.passwordStrengthText = 'Good';
        this.passwordStrengthClass = 'good';
        break;
      case 4:
        this.passwordStrengthText = 'Strong';
        this.passwordStrengthClass = 'strong';
        break;
    }
  }

  passwordsMatch(): boolean {
    return this.user.password === this.user.confirmPassword && this.user.password !== '';
  }

  isFormValid(): boolean {
    return !!this.user.name && 
           !!this.user.email && 
           !!this.user.password && 
           !!this.user.confirmPassword && 
           this.user.agreeToTerms &&
           this.passwordsMatch();
  }

  openTerms() {
    this.router.navigate(['/terms']);
  }

  openPrivacy() {
    this.router.navigate(['/privacy']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  signupWithGoogle() {
    console.log('Sign up with Google');
    // Implement Google OAuth
    this.showSocialSignupMessage('Google');
  }

  signupWithFacebook() {
    console.log('Sign up with Facebook');
    // Implement Facebook OAuth
    this.showSocialSignupMessage('Facebook');
  }

  signupWithGithub() {
    console.log('Sign up with GitHub');
    // Implement GitHub OAuth
    this.showSocialSignupMessage('GitHub');
  }

  private showSocialSignupMessage(provider: string) {
    alert(`${provider} signup would be implemented here. For now, please use the form above.`);
  }

  fillDemoData() {
    this.user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'SecurePass123!',
      confirmPassword: 'SecurePass123!',
      agreeToTerms: true,
      subscribeNewsletter: true
    };
    this.checkPasswordStrength();
  }

  private showSuccessMessage() {
    // You can implement a toast or alert here
    console.log('Registration successful!');
    // For now, we'll just log to console
  }
}