import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {  

  public href: string = window.location.pathname;

  constructor(private router: Router) {
    console.log(this.href)
  }
}
