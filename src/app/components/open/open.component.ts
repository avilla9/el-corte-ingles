import { Component, OnInit } from '@angular/core';
import { ActivationEnd, NavigationStart, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss'],
})
export class OpenComponent implements OnInit {

  activeMenu: boolean = false;

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  toggleMenu() {
    console.log('activeMenu', this.activeMenu)
    if (this.activeMenu) {
      this.menuCtrl.close();
    } else {
      this.menuCtrl.open();
    }
    this.activeMenu = !this.activeMenu;
    /* let open = this.menuCtrl.toggle();
    console.log('open', open) */
  }
}
