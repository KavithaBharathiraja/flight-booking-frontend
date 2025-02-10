// app.routes.ts

import { Routes } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { HomeComponent} from './components/home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'flights', component: FlightsComponent }
];
