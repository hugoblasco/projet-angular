import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './components/trending/trending.component';
import { DetailsComponent } from './components/details/details.component';
import { ResultsComponent } from './components/results/results.component';
import { GenresComponent } from './components/genres/genres.component';


const routes: Routes = [
  { path: '', redirectTo: 'movie/trending/1', pathMatch: 'full' },
  { path: ':type/trending/:page', component: TrendingComponent },
  { path: ':type/results/:query', component: ResultsComponent },
  { path: ':type/results/:query/:page', component: ResultsComponent },
  { path: ':type/genre/:id', component: GenresComponent },
  { path: ':type/genre/:id/:page', component: GenresComponent },
  { path: ':type/details/:id', component: DetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
