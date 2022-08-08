import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MenuController, NavController } from '@ionic/angular';
import { ArticleService } from '../../services/explore/article.service';
import { ReactionService } from '../../services/reaction.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent implements OnInit {

  /* posts: any = [
    {
      title: 'Salesforce',
      url: 'https://identity-services.elcorteingles.es/samlsso?spEntityID=https://eciseguros.my.salesforce.com',
      img: 'access/salesforce.jpg',
    },
    {
      title: 'Talento Mobile',
      url: 'https://www.ecisegurostm.elcorteingles.es/mediadores',
      img: 'access/talento.jpg',
    },
    {
      title: 'Buzón amigo',
      url: '',
      img: 'access/buzon.jpg',
    },
    {
      title: 'Aneto',
      url: '',
      img: 'access/aneto.jpg',
    },
    {
      title: 'Utilidades',
      url: '',
      img: 'access/utilidades.jpg',
    },
    {
      title: 'Aul@ ECI',
      url: '',
      img: 'access/aula.jpg',
    },
    {
      title: 'MyIT',
      url: 'https://elcorteingles-dwp.onbmc.com/',
      img: 'access/myit.jpg',
    },
    {
      title: 'Gestión de credenciales',
      url: 'https://nexo.elcorteingles.es/jgestioncredenciales/gestioncredenciales/Inicio',
      img: 'access/gestion.jpg',
    },
  ]; */

  posts: any;
  visited: any;

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    public menuCtrl: MenuController,
    private articleService: ArticleService,
    private reactions: ReactionService,
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  ionViewDidEnter() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.articleList('Accesos')
      .subscribe((res: any) => {
        console.log(res);
        this.posts = res;
      }, (err: any) => {
        console.log(err);
      });
  }

  clickPost(article) {
    if (article.external_link?.length) {
      this.externalPost(article.external_link)
    } else {
      localStorage.removeItem('post');
      this.internalPost(article)
    }
  }

  internalPost(article) {
    localStorage.setItem('post', JSON.stringify(article));
    this.navCtrl.navigateForward("/post");
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

  toggleMenuAccess() {
    this.menuCtrl.toggle();
  }

  externalPost(url) {
    if (url?.length) {
      this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
    }
  }
}
