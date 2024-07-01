import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  template: `
<main class="main">
  <div class="card">
    <h2>Signup</h2>
    
    <!-- SE CONNECTER / S'INSCRIRE -->
    <div class="login_register">
        <a class="login" target="blank">Login</a>
        <a href="#" class="register" target="blank">Signup</a>
    </div>

    <!-- FORMULAIRE -->
    <form class="form" (submit)="onSubmit()">
        <input type="text" placeholder="First Name" class="input" [(ngModel)]="firstName" name="firstName" required minlength="5">
        <input type="text" placeholder="Last Name" class="input" [(ngModel)]="lastName" name="lastName" required minlength="5">
        <input type="email" placeholder="Email Address" class="email" [(ngModel)]="email" name="email" required>
        <input type="password" placeholder="Password" class="pass" [(ngModel)]="password" name="password" required minlength="8">
        <button type="submit" class="login_btn">Register</button>
    </form>

    <!-- PIED DE LA CARD -->
    <div class="footer_card">
        <p>Have an account?</p>
        <a routerLink="/loginpage" routerLinkActive="active" ariaCurrentWhenActive="page">Login now</a>
    </div>
  </div>
</main>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    const fields = [this.firstName, this.lastName, this.email, this.password];
    const filledFields = fields.filter(field => field);
    if (filledFields.length < 4) {
      alert(`Silakan isi semua kolom. Anda masih memiliki ${4 - filledFields.length} kolom yang harus diisi.`);
    } else if (!this.email.includes('@gmail')) {
      alert('Alamat email harus menggunakan "@gmail".');
    } else if (this.firstName.length < 5 || this.lastName.length < 5) {
      alert('Nama depan dan nama belakang harus memiliki minimal 5 karakter.');
    } else if (this.password.length < 8) {
      alert('Kata sandi harus memiliki minimal 8 karakter.');
    } else {
      // Logic to handle the registration process
    }
  }
}
