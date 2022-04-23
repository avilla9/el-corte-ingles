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
      url: ': https://identity-services.elcorteingles.es/samlsso?spEntityID=https://eciseguros.my.salesforce.com',
      img: 'yellow.png',
    },
    {
      title: 'Talento Mobile',
      url: 'https://www.ecisegurostm.elcorteingles.es/mediadores',
      img: 'yellow.png',
    },
    {
      title: 'Buzón amigo',
      url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
      img: 'yellow.png',
    },
    {
      title: 'Aneto',
      url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
      img: 'yellow.png',
    },
    {
      title: 'Seguroteca',
      url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
      img: 'yellow.png',
    },
    {
      title: 'Utilidades',
      url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
      img: 'yellow.png',
    },
    {
      title: 'Aul@ ECI',
      url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
      img: 'yellow.png',
    },
    {
      title: 'MyIT',
      url: 'https://elcorteingles-dwp.onbmc.com/',
      img: 'yellow.png',
    },
    {
      title: 'Gestión de credenciales',
      url: 'https://nexo.elcorteingles.es/jgestioncredenciales/gestioncredenciales/Inicio',
      img: 'yellow.png',
    },
  ];

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
  ) { }

  ngOnInit() {
  }

  externalPost(url) {
    this.iab.create(url, '_self', 'beforeload=yes,location=yes,clearcache=yes,navigationbuttoncolor=#00ff00');
  }
}
