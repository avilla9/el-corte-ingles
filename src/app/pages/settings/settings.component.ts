import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {}

  toggleMenuAccess() {
    this.menuCtrl.toggle();
  }

}
