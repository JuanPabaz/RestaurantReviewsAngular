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
                path:'restaurant-detail',
                loadComponent: () => import('./business/restaurant/restaurant-detail/restaurant-detail.component')
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
                path:'profile',
                loadComponent: () => import('./business/profile/profile-layout/profile-layout.component'),
                children:[
                    {
                        path:'change-password',
                        loadComponent: () => import('./business/profile/change-password/change-password.component')
                    },
                    {
                        path:'personal-information',
                        loadComponent: () => import('./business/profile/personal-information/personal-information.component')
                    },
                    {
                        path: '',
                        redirectTo: 'personal-information',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'restaurant-list',
                pathMatch: 'full'
            }
        ]
    }
];
