import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from 'src/app/services/jwt-helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  accessToken: any;
  accessTokenDetails: any;
  loading: boolean;
  user;

  constructor(
    public navCtrl: NavController,
    private jwtHelper: JwtHelperService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.accessToken = localStorage.getItem('access_token');
    this.accessTokenDetails = jwtHelper.id();
    this.getUserData();
    /* = {
     id: jwtHelper.id(),
     name: jwtHelper.name(),
     email: jwtHelper.email()
   }; */
    /* console.log(this.accessTokenDetails); */
  }

  ngOnInit() { }

  redirect(page) {
    this.navCtrl.navigateForward(page);
  }

  /**
   * Logout the user and revoke his token
   */
  logout(): void {
    this.loading = true;
    this.authService.logout()
      .subscribe((res: any) => {
        console.log(res);
        /* this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']); */
      });
  }

  getUserData() {
    this.authService.userData(this.jwtHelper.id())
      .subscribe((res: any) => {
        this.user = res;
      }, (err: any) => {
        console.log(err);
      });
  }
}
