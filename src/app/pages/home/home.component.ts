import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { StoryComponent } from '../../components/story/story.component';
import { StoriesService } from '../../services/stories.service';

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

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public modalController: ModalController,
    private stories: StoriesService,
  ) { }

  ngOnInit() {

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
