import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard.component';
import { HeroesComponent }         from './heroes.component';
import { HeroDetailComponent }     from './hero-detail.component';
import { UsersComponent }          from './users.component';
import { UserDetailComponent }     from './user-detail.component';

const appRoutes: Routes = <Routes>[
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'user-detail/:id',
        component: UserDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);