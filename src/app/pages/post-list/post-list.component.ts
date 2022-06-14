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
    public menuCtrl: MenuController,
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

  clickPost(article) {
    if (article.link.length) {
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
