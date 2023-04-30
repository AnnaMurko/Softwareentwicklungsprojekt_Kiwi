import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {ChildsComponent} from "./components/childs/childs.component";
import {BewertungComponent} from "./components/bewertung/bewertung.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      ChildsComponent,
      BewertungComponent
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