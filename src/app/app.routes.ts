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
                path:'register',
                loadComponent: () => import('./business/auth/register/register.component')
            },
            {
                path:'restaurant-list',
                loadComponent: () => import('./business/restaurant/restaurant-list/restaurant-list.component')
            },
            {
                path:'review-list',
                loadComponent: () => import('./business/review/review-list/review-list.component')
            },
            {
                path:'create-review',
                loadComponent: () => import('./business/review/create-review/create-review.component')
            },
            {
                path: '',
                redirectTo: 'restaurant-list',
                pathMatch: 'full'
            }
        ]
    }
];
