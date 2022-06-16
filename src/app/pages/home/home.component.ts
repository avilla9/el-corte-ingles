import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { StoryComponent } from '../../components/story/story.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  images: any = [
    '../../../assets/images/1.jpg',
    '../../../assets/images/2.jpg',
    '../../../assets/images/3.jpg',
    '../../../assets/images/4.jpg',
    '../../../assets/images/5.jpg',
    '../../../assets/images/6.jpg',
    '../../../assets/images/7.jpg',
  ];

  visited = Array(this.images.length);

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
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
    console.log(image);
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
          }
        })
      .then(modal => {
        modal.present().then();
      });
    this.visited[position] = true;
  }
}
