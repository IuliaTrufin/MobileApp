import { AgmCoreModule } from "@agm/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { OffersComponent } from "./offers/offers.component";
import { ProductsComponent } from "./products/products.component";
import { MapsComponent } from "./maps/maps.component";
import { AccountComponent } from "./account/account.component";
import { AboutComponent } from "./about/about.component";
import { TermsComponent } from "./terms/terms.component";
import { AccelerometerComponent } from "./accelerometer/accelerometer.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { CameraComponent } from "./camera/camera.component";

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    ProductsComponent,
    MapsComponent,
    AccountComponent,
    AboutComponent,
    TermsComponent,
    AccelerometerComponent,
    LoginComponent,
    CameraComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "",
    }),
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
