import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '../../services/jwt-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // Variables
  form: FormGroup;
  loading: boolean;
  errors: boolean;
  error: string = '';

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private jwtHelper: JwtHelperService,

    private renderer: Renderer2,
    private elem: ElementRef,

    private loadingCtrl: LoadingController,
  ) {
    this.form = fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
  }

  /**
   * Login the user based on the form values
   */
   async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      translucent: true,
    });
    await loading.present();

    this.loading = true;
    this.errors = false;
    this.authService.login(this.controls.email.value, this.controls.password.value)
      .subscribe((res: any) => {
        loading.dismiss();
        this.error = '';
        console.log(res);
        // Store the access token in the localstorage
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('user_id', this.jwtHelper.id().toString());
        this.loading = false;


        const parent = this.renderer.selectRootElement(this.elem.nativeElement.parentNode);
        this.renderer.setStyle(parent, 'display', 'block')

        // Navigate to home page
        this.router.navigate(['/']);
      }, (err: any) => {
        loading.dismiss();
        let errorType = err.error.error;
        switch (err.status) {
          case 0:
            this.error = 'Ha ocurrido un error de conexión.';
            break;

          case 400:
            if (errorType === 'invalid_grant') {
              this.error = 'Email o contraseña incorrectas';
            } else if (errorType === 'invalid_request') {
              this.error = 'Rellene todos los campos';
            }
            break;

          default:
            break;
        }
        // This error can be internal or invalid credentials
        // You need to customize this based on the error.status code
        this.loading = false;
        this.errors = true;
      });
  }

  /**
   * Getter for the form controls
   */
  get controls() {
    return this.form.controls;
  }

}
