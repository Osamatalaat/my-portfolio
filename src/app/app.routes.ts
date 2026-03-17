import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home/home.component';



export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // عند الدخول على / يفتح Home
  { path: 'home', component: HomeComponent } // اختياري لو عايز /home برضه
];
