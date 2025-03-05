import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component')
    },
    {
        path:'login',
        loadComponent: () => import('./business/auth/login/login.component')
    }
];
