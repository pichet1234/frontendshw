import { Routes } from "@angular/router";
export default[
    {    
        path: 'registertwo',
        loadComponent: () => import('./registertwo.component').then(c => c.RegistertwoComponent)
    }
] as Routes