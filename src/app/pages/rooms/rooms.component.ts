import { Component, OnInit } from '@angular/core';
import { NavController, IonRouterOutlet, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {

  posts: any = [
    {
      title: 'TOP DELEGADOS',
      description: 'Información para ti y sobre tus agentes, ¿sabes para qué? ¡Pues claro! ¡Para que hables con ellos! ;)',
      img: 'post-list1.jpg',
      authorized: true,
      articles: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '1.jpg',
          link: '',
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '2.jpg',
          link: 'https://es.wikipedia.org/wiki/Titanic_(pel%C3%ADcula_de_1997)',
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '3.jpg',
          link: '',
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '4.jpg',
          link: '',
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '5.jpg',
          link: '',
        },
        {
          id: 6,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '6.jpg',
          link: '',
        },
        {
          id: 7,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '7.jpg',
          link: '',
        }
      ],
    },
    {
      title: 'TOP AGENTES',
      description: 'Pues si, si puedes entrar aquí es que eres el MVP de tu delegación.',
      img: 'post-list4.jpg',
      authorized: true,
      articles: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '1.jpg',
          link: '',
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '2.jpg',
          link: 'https://es.wikipedia.org/wiki/Titanic_(pel%C3%ADcula_de_1997)',
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '3.jpg',
          link: '',
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '4.jpg',
          link: '',
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '5.jpg',
          link: '',
        },
        {
          id: 6,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '6.jpg',
          link: '',
        },
        {
          id: 7,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '7.jpg',
          link: '',
        }
      ],
    },
    {
      title: 'AGENTES EN FORMACIÓN',
      description: 'Dicen que el conocimiento no ocupa lugar y todo lo que encontrarás aquí, ¡tampoco!',
      img: 'post-list3.jpg',
      authorized: true,
      articles: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '1.jpg',
          link: '',
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '2.jpg',
          link: 'https://es.wikipedia.org/wiki/Titanic_(pel%C3%ADcula_de_1997)',
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '3.jpg',
          link: '',
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '4.jpg',
          link: '',
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '5.jpg',
          link: '',
        },
        {
          id: 6,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '6.jpg',
          link: '',
        },
        {
          id: 7,
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          date: '23 de abril de 2022',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum',
          short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          cta: '',
          ctaContent: '',
          internalRoute: '',
          img: '7.jpg',
          link: '',
        }
      ],
    },
    {
      title: 'NO AUTORIZADO',
      description: 'Prueba de ingreso a sala sin autorización',
      img: 'post-list1.jpg',
      authorized: false,
      articles: [],
    },
  ];

  /* const alert = await this.alert.create({
    header: HEADER,
    message: `<img src="${mapUrl}" alt="g-maps" style="border-radius: 2px">`,
    buttons: [
      {
        text: CANCEL,
        role: 'cancel',
      },
      {
        text: CONFIRM,
        handler: ,
      },
    ],
  });

await alert.present(); */

  constructor(
    public navCtrl: NavController,
    public routerOutlet: IonRouterOutlet,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
  }

  clickPost(post) {
    localStorage.removeItem('room');
    localStorage.setItem('room', JSON.stringify(post));
    this.navCtrl.navigateForward("/room-list");
  }

  async showAlert() {
    var mapUrl = '../../../assets/images/unauth.png';
    const alert = await this.alertController.create({
      message: `<div class="unauth-title">¡En esta no puedes entrar!</div> <img src="${mapUrl}" class="unauth-alert">`,
      buttons: ['Cerrar']
    });
    await alert.present();
  }
}
