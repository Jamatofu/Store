import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { BandeauCookieComponent } from './bandeau-cookie/bandeau-cookie.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitListComponent } from './product/produit-list/produit-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductComponent } from './product/product/product.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    BandeauCookieComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProduitListComponent,
    AccueilComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
