import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarComponent],
  template: `
   <app-navbar></app-navbar>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { 
  
 }
