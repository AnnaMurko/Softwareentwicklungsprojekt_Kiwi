import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {ChildsComponent} from "./components/childs/childs.component";
import {BewertungComponent} from "./components/bewertung/bewertung.component";
import {ErgebnisComponent} from "./components/ergebnis/ergebnis.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'childs', component: ChildsComponent },
  { path: 'bewertung', component: BewertungComponent },
  { path: 'ergebnis', component: ErgebnisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
