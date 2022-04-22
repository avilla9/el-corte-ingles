import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AdoptionComponent } from '../adoption/adoption.component';
import { CampaignComponent } from '../campaign/campaign.component';
import { RewardsComponent } from '../rewards/rewards.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { AccessComponent } from '../access/access.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  @ViewChild('pageContainer', { read: ViewContainerRef }) pageContainer;
  activeTab = 0;
  tabs = [
    {
      component: CampaignComponent,
      title: 'Campaña',
      icon: 'add.svg',
    },
    {
      component: AdoptionComponent,
      title: 'Adopción',
      icon: 'head.svg',
    },
    {
      component: RewardsComponent,
      title: 'Recompensas',
      icon: 'like.svg',
    },
    {
      component: RoomsComponent,
      title: 'Salas',
      icon: 'estrella.svg',
    },
    {
      component: AccessComponent,
      title: 'Accesos',
      icon: 'iniciar-sesion.svg',
    },
  ]

  constructor(
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.changeTab(0);
  }

  changeTab(pos) {
    this.activeTab = pos;
    this.pageContainer.clear();
    this.pageContainer.createComponent(this.tabs[pos].component);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
