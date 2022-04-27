import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  toAccess() {
    localStorage.setItem('lastTab', '5');
  }
}