 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecoverPasswordService } from 'src/app/services/password/recover-password.service';

@Component({
  selector: 'app-get-email-password',
  templateUrl: './get-email-password.component.html',
  styleUrls: ['./get-email-password.component.scss'],
})
export class GetEmailPasswordComponent implements OnInit {

  formPassword: FormGroup = new FormGroup({});
  error: string = '';
  constructor(
    private recoveryPassword: RecoverPasswordService,
    fb: FormBuilder,
  ) {
    this.formPassword = fb.group({
      email: ['', [Validators.email, Validators.required]],
      origin: `${window.location.hostname}/change-password`,
    });
   }

  ngOnInit(): void {}

  getEmail(): void {
    const body = this.formPassword.value;

    // console.log(window.location.hostname);
    this.recoveryPassword.emailExists(body).subscribe((response) => {
      if(response.status === 400) {
        console.log(response.errors);
        this.error = response.errors;
      }
    });
  }
}
