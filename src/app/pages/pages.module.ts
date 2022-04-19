import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PagesModule { }
