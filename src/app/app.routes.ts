import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    { path: 'loginpage', component: LoginPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/loginpage', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
