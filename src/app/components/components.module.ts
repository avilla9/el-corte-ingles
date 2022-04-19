import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    SectionComponent
  ],
  exports: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
