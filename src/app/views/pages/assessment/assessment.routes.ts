import { Routes } from "@angular/router";
export default [
    { path:'', redirectTo: 'loadassessment', pathMatch: 'full'},
    {
        path: 'loadassessment',
        loadComponent: () => import('./loadassessment/loadassessment.component').then(c => c.LoadassessmentComponent)
    },
    {
        path: 'assessment2q',
        loadComponent: () => import('./assessment2q/assessment2q.component').then(c => c.Assessment2qComponent)
    },
    {
        path: 'assessment9q',
        loadComponent: () => import('./assessment9q/assessment9q.component').then(c => c.Assessment9qComponent)
    }
] as Routes