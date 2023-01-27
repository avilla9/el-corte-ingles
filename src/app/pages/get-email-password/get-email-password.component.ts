import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, RequiredValidator, EmailValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecoverPasswordService } from 'src/app/services/password/recover-password.service';

@Component({
  selector: 'app-get-email-password',
  templateUrl: './get-email-password.component.html',
  styleUrls: ['./get-email-password.component.scss'],
})
export class GetEmailPasswordComponent implements OnInit {

  error: string = '';

  formPassword = this.fb.group({
    email: ['', {
      validators: [
        Validators.required,
        Validators.email
      ],
      updateOn: 'blur'
    }],
  });

  constructor(
    private fb: FormBuilder,
    private recoveryPassword: RecoverPasswordService,
  ) { }

  ngOnInit(): void { }

  getEmail(): void {
    this.error = '';
    if (!this.formPassword.controls['email'].valid) {
      this.error = 'Debe ingresar un email válido';
      return;
    }

    let body = {
      email: this.formPassword.value['email'],
      origin: window.location.hostname + '/change-password'
    }

    this.recoveryPassword.emailExists(body).subscribe((response) => {
      if (response.status !== 202) {
        this.error = response.errors['email'];
      } else {
        this.showModal();
      }
    });
  }

  showModal() {
    console.log('hello');
  }
}
