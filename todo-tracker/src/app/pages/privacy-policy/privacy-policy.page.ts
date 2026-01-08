// src/app/pages/privacy/privacy.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PrivacyComponent {
  today = new Date(); // Add this missing property

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login']);
  }
}