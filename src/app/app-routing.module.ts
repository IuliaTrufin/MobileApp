import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { MapsComponent } from './maps/maps.component';
import { ProductsComponent } from './products/products.component';
import { OffersComponent } from './offers/offers.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
