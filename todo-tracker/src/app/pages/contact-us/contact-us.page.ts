import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: 'general',
    message: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    console.log('Contact form submitted:', this.contact);
    
    alert('Thank you for your message! We will get back to you soon.');
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}