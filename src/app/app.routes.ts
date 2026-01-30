import { Routes } from '@angular/router';
import { Home } from './site/home/home';
import { Films } from './site/films/films';
import { About } from './site/about/about';
import { Errors } from './site/errors/errors';

export const routes: Routes = [
    { path:'', component: Home },
    { path: 'films', component: Films },
    { path: 'about', component: About },
    { path:'404', component: Errors},
    { path:'**', redirectTo: '/404' }
];
