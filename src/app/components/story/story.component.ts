import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  img;
  pos;

  constructor() { }

  ngOnInit() { }

  changeStory(change) {
    if (change == 'prev') {
      if (this.pos > 0) {
        this.pos = this.pos - 1;
      }
    } else if ((this.img.length - 1) > this.pos) {
      this.pos = this.pos + 1;
    }
  }

}
