import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent implements OnInit {

  posts: any = [
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
  ];

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
  ) { }

  ngOnInit() {
  }

  externalPost(url) {
    if (url?.length) {
      this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#ffc404');
    }
  }
}
