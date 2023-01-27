import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecoverPasswordService } from 'src/app/services/password/recover-password.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  id: string;
  error = '';
  form = this.fb.group({
    password: ['', [Validators.required]],
    password_check: ['', [Validators.required]],
  });

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private recoveryPassword: RecoverPasswordService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  // this.activateRoute.params.subscribe( params => {
  // });

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  changePassword(): void {
    this.error = '';

    if (!this.form.controls['password'].valid || !this.form.controls['password_check'].valid) {
      this.error = 'Todos los campos son requeridos';
      return;
    }

    let body = {
      id: this.id,
      password: this.form.value['password'],
      password_check: this.form.value['password_check'],
    };

    this.recoveryPassword.newPassword(body).subscribe((response) => {
      if(response.status !== 202) {
        if(response.errors['password']) {
          this.error = response.errors['password'][0];
        } else if(response.errors['password_check']) {
          this.error = response.errors['password_check'][0];
        }
      } else {
        this.showModal();
      }
    });
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalMessageComponent,
      backdropDismiss: true,
      swipeToClose: true,
      animated: true,
      componentProps: {
        message: 'Su contraseña ha sido actualizada',
      }
    });

    modal.onWillDismiss().then(data => {
      this.router.navigate(['/']);
    });

    return await modal.present();
  }

}
