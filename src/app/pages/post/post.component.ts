import { Component, OnInit, ViewEncapsulation, Pipe } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { SafeHtmlPipe } from '../../safe-html.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {

  post: any;

  constructor(
    private iab: InAppBrowser,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.post = JSON.parse(localStorage.getItem("post"));
  }

  ionViewDidEnter() {
    this.post = JSON.parse(localStorage.getItem("post"));
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
  }

  interalRedirection(url) {
    this.navCtrl.navigateForward(url);
  }
}
