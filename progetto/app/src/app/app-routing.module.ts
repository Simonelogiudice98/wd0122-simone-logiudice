import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RemindersComponent } from './pages/reminders/reminders.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'reminders',
    component:RemindersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
