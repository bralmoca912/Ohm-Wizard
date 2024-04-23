import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'ohm-res',
                title: 'Ley de Ohm (V-I-R-P)',
                loadComponent: () => import('./dashboard/ohm-res/ohm-res.component')
            },
            {
                path: 'color-res',
                title: 'Resistencias por color',
                loadComponent: () => import('./dashboard//color-res/color-res.component')
            },
            {
                path: '',
                redirectTo: 'ohm-res',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
