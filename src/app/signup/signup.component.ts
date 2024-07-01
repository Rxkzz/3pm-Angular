import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
<main class="main">
  <div class="card">
    <h2>Signup</h2>
    

        <!-- SE CONNECTER / S'INSCRIRE -->
    <div class="login_register">
        <a  class="login" target="blank">Login</a>
        <a href="
" class="register" target="blank">Signup</a>
    </div>

        <!-- FORMULAIRE -->
    <form class="form">
        <input type="" placeholder="First Name" class="">
        <input type="" placeholder="Last Name" class="">
        <input type="email" placeholder="Email Adress" class="email">
        <input type="password" placeholder="password" class="pass">
    </form>


        <!-- BOUTTON LOGIN -->
        <a  routerLink="/loginpage" routerLinkActive="active" ariaCurrentWhenActive="page">
        <button type="button" class="login_btn">Register</button>
      </a>
        <!-- PIED DE LA CARD -->
    <div class="footer_card">
    <p>Have an account?</p>
    <a routerLink="/loginpage" routerLinkActive="active" ariaCurrentWhenActive="page">Login now</a>
    </div>
</div>
</main>
  `,
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
