import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path:'login',
                loadComponent: () => import('./business/auth/login/login.component')
            },
            {
                path:'restaurant-list',
                loadComponent: () => import('./business/restaurant/restaurant-list/restaurant-list.component')
            },
            {
                path: '',
                redirectTo: 'restaurant-list',
                pathMatch: 'full'
            }
        ]
    }
];
