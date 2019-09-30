import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './components/trending/trending.component';
import { DetailsComponent } from './components/details/details.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
  { path: 'trending', component: TrendingComponent },
  { path: 'movie/:id', component: DetailsComponent  },
  { path: 'results/:query', component: ResultsComponent },
  { path: 'results/:query/:page', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
