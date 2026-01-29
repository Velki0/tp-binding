import { Routes } from '@angular/router';
import { Home } from './site/home/home';
import { Films } from './site/films/films';
import { About } from './site/about/about';
import { Errors } from './site/errors/errors';
import { ProductGet } from './site/product/product-get/product-get';
import { ProductAdd } from './site/product/product-add/product-add';
import { ProductEdit } from './site/product/product-edit/product-edit';

export const routes: Routes = [
    { path:'', component: Home },
    { path: 'films', component: Films },
    { path: 'about', component: About },
    { path: 'products', component: ProductGet },
    { path: 'products/add', component: ProductAdd },
    { path: 'products/edit/:id', component: ProductEdit },
    { path:'404', component: Errors},
    { path:'**', redirectTo: '/404' }
];
