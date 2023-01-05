import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { CadreComponent } from './cadre/cadre.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    CadreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
