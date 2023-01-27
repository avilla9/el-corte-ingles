import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NewPasswordServiceService } from 'src/app/services/new-password-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  error;
  ok;
  loading;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private changePasswords: NewPasswordServiceService,
    private loadingCtrl: LoadingController,
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

  async send(info) {
    let error = '';
    if (error.length) {
      console.log(error)
      this.error = error;
    } else {
      const loading = await this.loadingCtrl.create({
        message: 'Enviando...',
        translucent: true,
      });
      await loading.present();
      this.loading = true;
      this.error = '';

      this.changePasswords.send(info).subscribe((res: any) => {
        // console.log(res.message);
        loading.dismiss();
        this.loading = false;
        this.ok = res.message
      }, (err: any) => {
        loading.dismiss();
        console.log(err);
        this.loading = false;
        let errorMessage = err.error.new_password[0]
        console.log(errorMessage);
        this.error = errorMessage;
      });
    }
  }


}