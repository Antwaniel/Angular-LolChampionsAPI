import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
     MenuComponent,
     FooterComponent
  ]
})
export class SharedModule { }
