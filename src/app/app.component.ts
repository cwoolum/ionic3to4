import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor() {

  }
}
