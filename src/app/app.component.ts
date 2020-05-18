import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { Motion, MotionEventResult } from "@capacitor/core";
import { Navigation, Router } from '@angular/router';

const { Network } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Offers',
      url: '/offers',
      icon: 'cash'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'heart'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'happy'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information'
    },
    {
      title: 'Terms',
      url: '/terms',
      icon: 'newspaper'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http:HttpClient,
    private nav:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();

      // this.http.post("http://localhost:51354/api/login/login",{username:"admin",password:"admin1"},{headers:{"Content-Type":"application/json"}}).subscribe(x => this.nav.navigateByUrl("maps"),err => console.log(err));
  }
  
  
}
