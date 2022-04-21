import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { PostComponent } from './post/post.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';



@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SharedDirectivesModule
  ]
})
export class PagesModule { }
