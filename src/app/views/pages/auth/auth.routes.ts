import { Routes } from "@angular/router";

export default [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
  },
  { 
    path: 'forgot-password',
    loadComponent: ()=> import('./forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent)
  },
  {
    path: 'reset-password/:token',
    loadComponent: ()=> import('./reset-password/reset-password.component').then(c => c.ResetPasswordComponent)
  }
] as Routes;