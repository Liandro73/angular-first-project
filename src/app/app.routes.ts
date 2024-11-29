import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateComponent },
];

export const appRoutes = provideRouter(routes);