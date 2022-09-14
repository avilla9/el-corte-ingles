import { Component, Input } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public href: string = window.location.pathname;

  constructor(
    private router: Router,
    private platform: Platform

    ) {       
      this.initializeApp()
    }
    initializeApp() {
      this.platform.ready().then( async () => {
        // set status bar to white
       await StatusBar.setStyle({style:Style.Dark});
        // set status bar to white
        
      });
    }
    
    

}
