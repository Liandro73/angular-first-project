import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { AddressComponent } from './address/address.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateComponent },
    { path: 'address', component: AddressComponent },
];

export const appRoutes = provideRouter(routes);