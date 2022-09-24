import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './riot/pages/champions/champions.component';
import { ViewChampionComponent } from './riot/pages/view-champion/view-champion.component';
import { HomeComponent } from './riot/pages/home/home.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';



const routes:Routes = [

    {
      path: '',
      component: ChampionsComponent
    },
    {
      path: 'view/:id',
      component: ViewChampionComponent
    },
    {
      path: '**',
      redirectTo: ''
    }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
