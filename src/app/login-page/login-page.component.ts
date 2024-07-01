import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  template: `
<main class="main">
  <div class="card">
    <h2>Login Form</h2>
    
    <!-- SE CONNECTER / S'INSCRIRE -->
    <div class="login_register">
        <a class="login" target="blank">Login</a>
        <a href="#" class="register" target="blank">Signup</a>
    </div>

    <!-- FORMULAIRE -->
    <form class="form" (submit)="onSubmit()">
        <input type="email" placeholder="Email Address" class="email" [(ngModel)]="email" name="email" required minlength="5">
        <input type="password" placeholder="Password" class="pass" [(ngModel)]="password" name="password" required minlength="8">
        <button type="submit" class="login_btn">Login</button>
    </form>

    <!-- MOT DE PASSE OUBLIE ? -->
    <a href="#" class="fp">Forgot password?</a>

    <!-- PIED DE LA CARD -->
    <div class="footer_card">
        <p>Dont have an account?</p>
        <a routerLink="/signup" routerLinkActive="active" ariaCurrentWhenActive="page">Signup now</a>
    </div>
  </div>
</main>
  `,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (!this.email && !this.password) {
      alert('Silakan isi alamat email dan kata sandi Anda.');
    } else if (!this.email) {
      alert('Silakan isi alamat email Anda.');
    } else if (!this.password) {
      alert('Silakan isi kata sandi Anda.');
    } else if (!this.email.includes('@gmail')) {
      alert('Alamat email harus mengandung karakter "@gmail"');
    } else if (this.email.length < 5) {
      alert('Alamat email harus memiliki minimal 5 karakter.');
    } else if (this.password.length < 8) {
      alert('Kata sandi harus memiliki minimal 8 karakter.');
    }
  }
}
