import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class TermsComponent {
  today = new Date(); 

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login']);
  }
}