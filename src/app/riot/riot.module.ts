import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ViewChampionComponent } from './pages/view-champion/view-champion.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ImagePipe } from './pipes/image.pipe';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { AbilityComponent } from './components/ability/ability.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ChampionsComponent,
    ViewChampionComponent,
    ImagePipe,
    ObjectToArrayPipe,
    AbilityComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    SharedModule
  ]
})
export class RiotModule { }
