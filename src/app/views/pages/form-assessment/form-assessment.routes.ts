import { Routes } from "@angular/router";

export default [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    {
        path:'form',
        loadComponent: () => import('./form/form.component').then(c => c.FormComponent)
    },
    {
        path:'formtwo',
        loadComponent: () => import('./formtwo/formtwo.component').then(c => c.FormtwoComponent)
    },
    {
        path:'assessment9q',
        loadComponent: () => import('./assessment9q/assessment9q.component').then(c => c.Assessment9qComponent)
    }
] as Routes