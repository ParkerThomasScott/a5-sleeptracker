import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'nightModal', loadChildren: './home/night-modal/night-modal.module#NightModalPageModule' },
  { path: 'ratingsModal', loadChildren: './home/ratings-modal/ratings-modal.module#RatingsModalPageModule' },
  { path: 'night-modal', loadChildren: './home/night-modal/night-modal.module#NightModalPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
