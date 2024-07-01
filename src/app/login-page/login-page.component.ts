import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet],
  template: `
<main class="main">
  <div class="card">
    <h2>Login Form</h2>
    

        <!-- SE CONNECTER / S'INSCRIRE -->
    <div class="login_register">
        <a  class="login" target="blank">Login</a>
        <a href="
" class="register" target="blank">Signup</a>
    </div>

        <!-- FORMULAIRE -->
    <form class="form">
        <input type="email" placeholder="Email Adress" class="email">
        <input type="password" placeholder="password" class="pass">
    </form>

        <!-- MOT DE PASSE OUBLIE ? -->
    <a href="#" class="fp">Forgot password?</a>

        <!-- BOUTTON LOGIN -->
        <a  routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">
        <button type="button" class="login_btn">Login</button>
      </a>
        <!-- PIED DE LA CARD -->
    <div class="footer_card">
    <p>Dont have an account?</p>
    <a routerLink="/signup" routerLinkActive="active" ariaCurrentWhenActive="page">Signup now</a>
    </div>
</div>
</main>
 
  `,
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
