import { HomeComponent } from "./home/home.component";
import { TermsComponent } from "./terms/terms.component";
import { AboutComponent } from "./about/about.component";
import { AccountComponent } from "./account/account.component";
import { MapsComponent } from "./maps/maps.component";
import { ProductsComponent } from "./products/products.component";
import { OffersComponent } from "./offers/offers.component";
import { AccelerometerComponent } from "./accelerometer/accelerometer.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CameraComponent } from "./camera/camera.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "account",
    component: AccountComponent,
  },
  {
    path: "maps",
    component: MapsComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "offers",
    component: OffersComponent,
  },
  {
    path: "accelerometer",
    component: AccelerometerComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "camera",
    component: CameraComponent,
  },
  {
    path: "edit",
    component: EditComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
