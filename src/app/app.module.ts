import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'; 
import { CarteComponent } from './carte/carte.component';
import { CadreComponent } from './cadre/cadre.component';
import { ShiatsuComponent } from './shiatsu/shiatsu.component';
import { OsteopatheComponent } from './osteopathe/osteopathe.component';
import { MarechalComponent } from './marechal/marechal.component';
import { VeterinaireComponent } from './veterinaire/veterinaire.component';
import { DentisteComponent } from './dentiste/dentiste.component';
import { MasseurComponent } from './masseur/masseur.component';
import { EquarisseurComponent } from './equarisseur/equarisseur.component';
import { Routes, RouterModule } from '@angular/router';
import { TestCardComponent } from './test-card/test-card.component';


const routes: Routes = [
  { path: '', component: AppComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    CadreComponent,
    HeaderComponent,
    CarteComponent,
    ShiatsuComponent,
    OsteopatheComponent,
    MarechalComponent,
    VeterinaireComponent,
    DentisteComponent,
    MasseurComponent,
    EquarisseurComponent,
    TestCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
