import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent],
  template: `
  <section>
    <router-outlet></router-outlet>
  </section>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoginPage-Angular';
}
