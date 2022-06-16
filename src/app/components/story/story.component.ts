import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  img;
  pos;
  progress;

  interval;
  time;
  display;

  constructor(private modalController: ModalController) { }

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
        console.log(this.progress);
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
    } else {
      this.modalController.dismiss();
      clearInterval(this.interval);
    }
  }

}
