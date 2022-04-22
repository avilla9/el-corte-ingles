import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  list: any;

  constructor(
    private menuCtrl: MenuController,
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem("post-list"));
  }

  ionViewDidEnter() {
    console.log(this.list);
    this.list = JSON.parse(localStorage.getItem("post-list"));
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
      'img': post.image,
    }
    localStorage.setItem('post', JSON.stringify(data));
    console.log(data);
    this.navCtrl.navigateForward("/post");
  }
}
