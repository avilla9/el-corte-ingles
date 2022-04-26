import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post: any;

  constructor(private iab: InAppBrowser,) { }

  ngOnInit() {
    this.post = JSON.parse(localStorage.getItem("post"));
  }

  ionViewDidEnter() {
    this.post = JSON.parse(localStorage.getItem("post"));
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#00ff00');
  }

}
