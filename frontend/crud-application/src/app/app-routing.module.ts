import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {ChildsComponent} from "./components/childs/childs.component";
import {BewertungComponent} from "./components/bewertung/bewertung.component";
import {ErgebnisComponent} from "./components/ergebnis/ergebnis.component";
import {EditChildComponent} from "./components/editChild/editChild.component";
import {EditEducatorComponent} from "./components/editEducator/editEducator.component";
import {AddChildComponent} from "./components/addChild/addChild.component";
import {AddEducatorComponent} from "./components/addEducator/addEducator.component";
import {UpdateChildComponent} from "./components/updateChild/updateChild.component";
import {UpdateEducatorComponent} from "./components/updateEducator/updateEducator.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'childs', component: ChildsComponent },
  { path: 'bewertung', component: BewertungComponent },
  { path: 'ergebnis', component: ErgebnisComponent },
  { path: 'editChild', component: EditChildComponent },
  { path: 'editEducator', component: EditEducatorComponent },
  { path: 'addChild', component: AddChildComponent },
  { path: 'addEducator', component: AddEducatorComponent },
  { path: 'updateChild', component: UpdateChildComponent },
  { path: 'updateEducator', component: UpdateEducatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
