import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { PostComponent } from './pages/post/post.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AccessComponent } from './pages/access/access.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'explora', component: ExploreComponent },
  { path: 'accesos', component: AccessComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'room-list', component: RoomListComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
