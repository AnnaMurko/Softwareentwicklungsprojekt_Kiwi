import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {MyChildrenComponent} from "./components/myChildren/myChildren.component";
import {ValuationComponent} from "./components/valuation/valuation.component";
import {ValuationResultComponent} from "./components/valuationResult/valuationResult.component";
import {AllChildrenComponent} from "./components/allChildren/allChildren.component";
import {AllAttendantsComponent} from "./components/allAttendants/allAttendants.component";
import {AddChildComponent} from "./components/addChild/addChild.component";
import {AddAttendantComponent} from "./components/addAttendant/addAttendant.component";
import {UpdateChildComponent} from "./components/updateChild/updateChild.component";
import {UpdateAttendantComponent} from "./components/updateAttendant/updateAttendant.component";
import {ValuationListComponent} from "./components/valuationList/valuationList.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      MyChildrenComponent,
      ValuationComponent,
      ValuationResultComponent,
      AllChildrenComponent,
      AllAttendantsComponent,
      AddChildComponent,
      AddAttendantComponent,
      UpdateChildComponent,
      UpdateAttendantComponent,
      ValuationListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}