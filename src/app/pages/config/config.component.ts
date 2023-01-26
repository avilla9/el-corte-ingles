import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  goBack() {
    this.navCtrl.back();
  }

  redirect(page) {
    this.navCtrl.navigateForward(page);
  }
}
