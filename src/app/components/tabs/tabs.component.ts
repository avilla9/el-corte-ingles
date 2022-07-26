import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  show: boolean;

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

  onTabsWillChange(event) {
    console.log('change', event.tab);
    if (event.tab === 'login') {
      console.log('islogin');
      this.show = false;
    } else {
      this.show = true;
    }
  }
}