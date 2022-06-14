import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss'],
})
export class MailboxComponent implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
