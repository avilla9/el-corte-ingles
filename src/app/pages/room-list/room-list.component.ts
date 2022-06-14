import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {

  list: any;

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem("room"));
  }

  ionViewDidEnter() {
    console.log(this.list);
    this.list = JSON.parse(localStorage.getItem("room"));
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  clickPost(article) {
    if (article.link?.length) {
      this.externalPost(article.link)
    } else {
      localStorage.removeItem('post');
      this.interalPost(article)
    }
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
  }

  interalPost(article) {
    localStorage.setItem('post', JSON.stringify(article));
    this.navCtrl.navigateForward("/post");
  }
}
