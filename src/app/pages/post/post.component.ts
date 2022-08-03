import { Component, OnInit, ViewEncapsulation, Pipe } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { ReactionService } from '../../services/reaction.service';
import { Share } from '@capacitor/share';

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
    private reactions: ReactionService,
  ) { }

  ngOnInit() {
    this.post = JSON.parse(localStorage.getItem("post"));
    console.log(this.post);
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

  like(post, event) {
    console.log('event', event);
    var target = event.target || event.srcElement || event.currentTarget;
    this.reactions
      .doLike(post)
      .subscribe((response) => {
        console.log(response);
        if (response > 0) {
          target.setAttribute('class', 'icon md hydrated liked');
          target.setAttribute('name', 'heart');
        } else {
          target.setAttribute('class', 'icon md hydrated');
          target.setAttribute('name', 'heart-outline');
        }
      });
  }

  async shareApp(post) {
    await Share.share({
      title: post.title,
      text: post.short_description,
      url: 'https://app-eci.web.app/',
      dialogTitle: 'Share with buddies',
    });
  }
}
