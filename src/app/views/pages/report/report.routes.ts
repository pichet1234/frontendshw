import { Routes } from "@angular/router";

export default [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    {
        path:'risk',
        loadComponent: () => import('./risk/risk.component').then(c => c.RiskComponent)
    },
    {
        path:'moderate',
        loadComponent: () => import('./moderate/moderate.component')
    }
] as Routes