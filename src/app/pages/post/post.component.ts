import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post: any;

  constructor() { }

  ngOnInit() {
    this.post = JSON.parse(localStorage.getItem("post"));
  }

  ionViewDidEnter() {
    this.post = JSON.parse(localStorage.getItem("post"));
  }

}
