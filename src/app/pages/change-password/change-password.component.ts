import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {}

  redirect(page) {
    this.navCtrl.navigateForward(page);
  }


  toggleMenuAccess() {
    this.menuCtrl.toggle();
  }
  oldTextFieldType: boolean;
  ismyTextFieldType: boolean;

  togglemyNewPasswordFieldType(){
//    $event.stopPropagation();
    return this.ismyTextFieldType = !this.ismyTextFieldType;
  }
  togglemyOldPasswordFieldType() {
    return this.oldTextFieldType = !this.oldTextFieldType;
  }

  

}