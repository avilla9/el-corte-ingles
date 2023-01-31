import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
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
  user;

  constructor(
    public navCtrl: NavController,
    private jwtHelper: JwtHelperService,
    private authService: AuthService,
    private router: Router,
    public menuCtrl: MenuController
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

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  redirect(page) {
    this.navCtrl.navigateForward(page);
    this.toggleMenu();
  }

  /**
   * Logout the user and revoke his token
   */
  logout(): void {
    this.authService.logout(this.user.id)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
        this.toggleMenu();
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
