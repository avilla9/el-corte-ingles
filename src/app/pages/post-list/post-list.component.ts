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
    console.log(this.list)
  }

  ionViewDidEnter() {
    this.list = JSON.parse(localStorage.getItem("post-list"));
    console.log(this.list)
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  clickPost(article) {
    if (article.post_type === 'external') {
      this.externalPost(article.external_link)
    } else if(article.post_type === 'post') {
      localStorage.removeItem('post');
      this.internalPost(article)
    }
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
  }

  internalPost(article) {
    localStorage.setItem('post', JSON.stringify(article));
    this.navCtrl.navigateForward("/post");
  }
}
