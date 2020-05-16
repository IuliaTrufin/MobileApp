import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { Motion, MotionEventResult } from "@capacitor/core";

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
    private statusBar: StatusBar
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
    this.addAccelerometerListener(acceleration => { console.log(acceleration.acceleration.x);
      console.log(acceleration.acceleration.y);
      console.log(acceleration.acceleration.z);});
  }
  
  addAccelerometerListener(callback: (event: MotionEventResult) => void) {
    Motion.addListener("accel", callback);
  }
}
