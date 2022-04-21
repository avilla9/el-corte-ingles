import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    SectionComponent,
    HeaderComponent,
    MenuComponent,
    TabsComponent,
  ],
  exports: [
    SectionComponent,
    HeaderComponent,
    MenuComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
