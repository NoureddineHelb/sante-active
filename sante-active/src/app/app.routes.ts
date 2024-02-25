import { Routes } from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ImcCalculatorComponent} from "./imc-calculator/imc-calculator.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:"home"},
  {path: 'home', component: HomeComponent},
  {path: 'service-list', component: ServiceListComponent},
  {path: 'service-list/imc-calculator', component: ImcCalculatorComponent},
];
