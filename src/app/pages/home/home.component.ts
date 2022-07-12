import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { StoryComponent } from '../../components/story/story.component';
import { StoriesService } from '../../services/stories.service';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from 'src/app/services/jwt-helper.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  /* images: any = [
    {
      src: '../../../assets/images/1.jpg',
      date: '',
      link: {
        name: 'PDF',
        internal: '',
        external: 'https://drive.google.com/file/d/1oTWf5-6m_P9DvWQOlInJHZ53cT__sPaB/view?usp=sharing',
      }
    },
    {
      src: '../../../assets/images/2.jpg',
      date: '',
      link: {
        name: 'TVC',
        internal: '',
        external: 'https://thevaluescorner.com/',
      }
    },
    {
      src: '../../../assets/images/3.jpg',
      date: '',
      link: {
        name: '',
        internal: '',
        external: '',
      }
    },
    {
      src: '../../../assets/images/4.jpg',
      date: '',
      link: {
        name: 'Abrir documento',
        internal: '',
        external: 'https://drive.google.com/file/d/1ZGg1qskLWm3gtVS-LeEfv_6XEHeHd_vy/view?usp=sharing',
      }
    },
    {
      src: '../../../assets/images/5.jpg',
      date: '',
      link: {
        name: '',
        internal: '',
        external: '',
      }
    },
    {
      src: '../../../assets/images/6.jpg',
      date: '',
      link: {
        name: '',
        internal: '',
        external: '',
      }
    },
    {
      src: '../../../assets/images/7.jpg',
      date: '',
      link: {
        name: '',
        internal: '',
        external: '',
      }
    },
  ]; */

  images: any;
  visited: any;
  user;

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public modalController: ModalController,
    private stories: StoriesService,
    private jwtHelper: JwtHelperService,
    private authService: AuthService,
  ) {
    this.getUserData();
  }

  ngOnInit() {
    /* console.log('Initializing HomePage');
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    ); */
  }

  ionViewDidEnter() {
    this.stories
      .getStories()
      .subscribe((response) => {
        console.log('get', response);
        this.images = response;
        this.visited = Array(this.images.length);
      });

    console.log(this.visited)
  }

  getUserData() {
    this.authService.userData(this.jwtHelper.id())
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
      }, (err: any) => {
        console.log(err);
      });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  toExplore() {
    localStorage.setItem('lastTab', '0');
    this.navCtrl.navigateForward('/explora');
  }

  openModal(image, position) {
    this.modalController
      .create(
        {
          component: StoryComponent,
          backdropDismiss: true,
          swipeToClose: true,
          cssClass: 'bottom-pop-up',
          componentProps: {
            img: image,
            pos: position,
            visited: this.visited,
          }
        })
      .then(modal => {
        modal.present().then();
      });
    this.visited[position] = true;
  }
}
