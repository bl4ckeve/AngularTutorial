

import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {NgModule} from '@angular/core';
import {AddHeroComponent} from './add-hero.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes/detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes/add',
    component: AddHeroComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes )],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
