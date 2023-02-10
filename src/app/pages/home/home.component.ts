import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { AlertController, LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { StoryComponent } from '../../components/story/story.component';
import { StoriesService } from '../../services/stories.service';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from 'src/app/services/jwt-helper.service';
import { ArticleService } from '../../services/explore/article.service';
import { Share } from '@capacitor/share';


import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ReactionService } from '../../services/reaction.service';
import { Router } from '@angular/router';
import { PostAccessService } from 'src/app/services/post-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  images: any;
  visited: any;
  user: any;
  posts: any;
  date = new Date().getFullYear();

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public modalController: ModalController,
    private stories: StoriesService,
    private jwtHelper: JwtHelperService,
    private authService: AuthService,
    private articleService: ArticleService,
    private reactions: ReactionService,
    private iab: InAppBrowser,
    private getPostAccess: PostAccessService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,

    private renderer: Renderer2,
    private elem: ElementRef,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUserData();
    this.getArticles();

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
    this.getStories();
    this.getArticles();
    console.log(this.visited)
  }

  getUserData() {
    this.authService.userData(this.jwtHelper.id())
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
        localStorage.setItem('user', res);
      }, (err: any) => {
        console.log(err);
      });
  }

  getStories() {
    this.stories
      .getStories()
      .subscribe((response) => {
        this.images = response;
        console.log(this.images);
        this.visited = Array(this.images.length);
      });
  }

  getArticles() {
    this.articleService.articleList('Home')
      .subscribe((res: any) => {
        console.log(res);
        this.posts = res;
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

  async openModal(image, position) {
    const modal = await this.modalController.create({
      component: StoryComponent,
      backdropDismiss: true,
      swipeToClose: true,
      cssClass: 'bottom-pop-up',
      componentProps: {
        img: image,
        pos: position,
        visited: this.visited,
      }
    });
    modal.onWillDismiss().then(data => {
      console.log('dismissed', data);
      this.getStories();
    });
    return await modal.present();
  }

  open(article) {
    // The user click to see the article
    this.view(article);

    if (article.post_type === 'post') {
      this.internalPost(article);
    } else if (article.post_type === 'external') {
      this.externalPost(article.external_link);
    }
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
  }

  async internalPost(data) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      translucent: true,
    });
    await loading.present();
    this.getPostAccess.sendAccess(data).subscribe((res: any)  => {
      if (res == 0) {  
        // console.log(res, "No puedes entrar");
        this.presentAlert();
        }
      else {
        localStorage.setItem('post', JSON.stringify(data)); 
        this.navCtrl.navigateForward("/post" + "/" + data.id);
      }
      loading.dismiss();
        }, (err: any) => {
          console.log(err);
        });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡ERROR!',
      subHeader: 'No tienes autorizacion para visualizar este contenido.',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  like(post, event) {
    console.log('event', event);
    var target = event.target || event.srcElement || event.currentTarget;
    this.reactions
      .doLike(post)
      .subscribe((response) => {
        if (response > 0) {
          target.setAttribute('class', 'icon md hydrated liked');
          target.setAttribute('name', 'heart');
        } else {
          target.setAttribute('class', 'icon md hydrated');
          target.setAttribute('name', 'heart-outline');
        }
      });

    console.log(this.visited)
  }

  async shareApp(post) {
    await Share.share({
      title: post.title,
      text: post.short_description,
      url: 'https://app-eci.web.app/',
      dialogTitle: 'Share with buddies',
    });
  }

  view(post) {
    this.reactions
      .doView(post)
      .subscribe((response) => {
        console.log('view', response);
      });
  }

  redirect(page) {
    this.navCtrl.navigateForward(page);
  }

  logout(): void {
    this.authService.logout(this.user.id)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
      });
  }
}
