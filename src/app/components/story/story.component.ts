import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  img;
  pos;
  visited;
  progress;

  interval;
  time;
  display;

  constructor(
    private modalController: ModalController,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.setProgress();
  }

  setProgress() {
    this.time = 100;
    this.progress = 0;

    this.interval = setInterval(() => {
      if (this.time === 0) {
        clearInterval(this.interval);
        if ((this.img.length - 1) > this.pos) {
          this.changeStory('next');
        } else {
          this.modalController.dismiss();
        }
      } else {
        this.time--;
        this.progress = (100 - this.time) / 100;
      }
    }, 100);
  }

  changeStory(change) {
    clearInterval(this.interval);
    this.setProgress();

    if (change == 'prev') {
      if (this.pos > 0) {
        this.pos = this.pos - 1;
      }
    } else if ((this.img.length - 1) > this.pos) {
      this.pos = this.pos + 1;
      this.visited[this.pos] = true;
    } else {
      this.modalController.dismiss();
      clearInterval(this.interval);
    }
  }

  close() {
    clearInterval(this.interval);
    this.modalController.dismiss();
  }

  openLink(link) {
    if (link.internal?.length) {
      true;
    } else if (link.external?.length) {
      this.externalPost(link.external);
    }
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
  }

  interalPost(article) {
  }
}
