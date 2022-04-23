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
    private menuCtrl: MenuController,
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

  clickPost(post) {
    let data = {};
    localStorage.removeItem('post');
    data = {
      'title': post.title,
      'date': '',
      'description': post.description,
      'cta': '',
      'cta-content': '',
      'internal-route': '',
      'img': post.img,
    }
    localStorage.setItem('post', JSON.stringify(data));
    console.log(data);
    this.navCtrl.navigateForward("/post");
  }
}
