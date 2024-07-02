import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    { path: 'loginpage', title: 'login', component: LoginPageComponent },
    { path: 'signup', title: 'sign', component: SignupComponent },
    { path: 'dashboard', title: 'dashboard', component: DashboardComponent },
    { path: 'home', title: 'home', component: HomeComponent },


    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
