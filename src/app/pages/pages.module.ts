import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { PostComponent } from './post/post.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { AdoptionComponent } from './adoption/adoption.component';
import { CampaignComponent } from './campaign/campaign.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AccessComponent } from './access/access.component';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from '../components/header/header.component';
import { PostListComponent } from './post-list/post-list.component';

const ENTRYCOMPONENTS = [
  AdoptionComponent,
  CampaignComponent,
  RewardsComponent,
  RoomsComponent,
  AccessComponent,
];

const COMPONENTS = [ExploreComponent];

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    PostListComponent,
    COMPONENTS,
    ENTRYCOMPONENTS,
    /* ExploreComponent,
    AdoptionComponent,
    CampaignComponent,
    RewardsComponent,
    RoomsComponent,
    AccessComponent, */
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SharedDirectivesModule,
    ChartsModule,
  ]
})
export class PagesModule { }
