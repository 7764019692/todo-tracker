import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class AboutComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login']);
  }
}