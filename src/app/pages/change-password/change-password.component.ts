import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecoverPasswordService } from 'src/app/services/password/recover-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  id: string;
  form: FormGroup = new FormGroup({});

  constructor(
    private activateRoute: ActivatedRoute,
    fb: FormBuilder,
    private recoveryPassword: RecoverPasswordService
  ) 
  {
    this.activateRoute.params.subscribe( params => {
      // console.log(window.crypto.subtle.decrypt(params.id));
      this.id = params.id;
      this.form = fb.group({
        id: [params.id],
        password: ['', [Validators.required]],
        password_check: ['', [Validators.required]],
      });
    });
  }

  ngOnInit() {}

  changePassword(): void {
    const body = this.form.value;

    // console.log(body);

    this.recoveryPassword.newPassword(body).subscribe((response) => {
      console.log(response);
    });
  }

}
