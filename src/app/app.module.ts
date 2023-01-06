import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'; 
import { CarteComponent } from './carte/carte.component';
import { CadreComponent } from './cadre/cadre.component';
import { PageMetierComponent } from './page-metier/page-metier.component';


@NgModule({
  declarations: [
    AppComponent,
    CadreComponent,
    HeaderComponent,
    CarteComponent,
    PageMetierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
