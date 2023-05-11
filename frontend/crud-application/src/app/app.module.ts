import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
import {BewertungenListeComponent} from "./components/bewertungenListe/bewertungenListe.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      ChildsComponent,
      BewertungComponent,
      ErgebnisComponent,
      EditChildComponent,
      EditEducatorComponent,
      AddChildComponent,
      AddEducatorComponent,
      UpdateChildComponent,
      UpdateEducatorComponent,
      BewertungenListeComponent,
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