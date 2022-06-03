import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { HomeComponent } from './pages/home/home.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'activePosts' ,
    component: ActivePostsComponent,
  },
  {
    path:'inactivePosts',
    component: InactivePostsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
