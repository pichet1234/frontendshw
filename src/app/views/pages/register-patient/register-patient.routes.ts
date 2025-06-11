import { Routes } from "@angular/router";

export default [
  { path: '', redirectTo: 'redirto', pathMatch: 'full' },
  {
    path: 'redirto',
    loadComponent: () => import('./redirto/redirto.component').then(c => c.RedirtoComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
  }
] as Routes