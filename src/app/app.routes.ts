import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'ohm-res',
                title: 'Ley de Ohm (R-V-I)',
                loadComponent: () => import('./dashboard/ohm-res/ohm-res.component')
            },
            {
                path: 'ohm-pot',
                title: 'Ley de Ohm (P-V-I)',
                loadComponent: () => import('./dashboard/ohm-pot/ohm-pot.component')
            },
            {
                path: 'color-res',
                title: 'Resistencias por color',
                loadComponent: () => import('./dashboard//color-res/color-res.component')
            },
            {
                path: 'opams',
                title: 'Amplificador operacional',
                loadComponent: () => import('./dashboard/opams/opams.component')
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
