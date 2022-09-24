import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// PRIME NG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    GalleriaModule
  ]
})
export class PrimeNGModule { }
