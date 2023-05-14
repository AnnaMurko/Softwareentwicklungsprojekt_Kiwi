import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {MyChildrenComponent} from "./components/myChildren/myChildren.component";
import {ValuationComponent} from "./components/valuation/valuation.component";
import {ValuationResultComponent} from "./components/valuationResult/valuationResult.component";
import {AllAttendantsComponent} from "./components/allAttendants/allAttendants.component";
import {AddChildComponent} from "./components/addChild/addChild.component";
import {AddAttendantComponent} from "./components/addAttendant/addAttendant.component";
import {UpdateChildComponent} from "./components/updateChild/updateChild.component";
import {UpdateAttendantComponent} from "./components/updateAttendant/updateAttendant.component";
import {ValuationListComponent} from "./components/valuationList/valuationList.component";
import {AllChildrenComponent} from "./components/allChildren/allChildren.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'myChildren', component: MyChildrenComponent },
  { path: 'valuation', component: ValuationComponent },
  { path: 'valuationResult', component: ValuationResultComponent },
  { path: 'allChildren', component: AllChildrenComponent },
  { path: 'allAttendants', component: AllAttendantsComponent },
  { path: 'addChild', component: AddChildComponent },
  { path: 'addAttendant', component: AddAttendantComponent },
  { path: 'updateChild', component: UpdateChildComponent },
  { path: 'updateAttendant', component: UpdateAttendantComponent },
  { path: 'valuationList', component: ValuationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
