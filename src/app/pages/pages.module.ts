import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ]
})
export class PagesModule { }
