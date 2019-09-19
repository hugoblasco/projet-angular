import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './components/trending/trending.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {
    path: '',
    component: TrendingComponent
  },
  {
    path: 'trending',
    component: TrendingComponent
  },
  {
    path: 'movie/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
