import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Import the AngularFire Module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// AngularFire Settings
export const firebaseConfig = {
  apiKey: "AIzaSyD8uljhUyWdRyZDEc35xl-YS8CqkrtkUtM",
    authDomain: "twnboc-console.firebaseapp.com",
    databaseURL: "https://twnboc-console.firebaseio.com",
    projectId: "twnboc-console",
    storageBucket: "twnboc-console.appspot.com",
    messagingSenderId: "710561007571",
    appId: "1:710561007571:web:1e80e59d9cd04a8a745126"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
