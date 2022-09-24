import { Component, Input, OnInit } from '@angular/core';
import { splashScreens } from 'src/app/endpoints';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input() skins: any;
  @Input() champion: any;

  splashScreens: string = splashScreens;

  images: any[] = ['1'];

  responsiveOptions: any[] = [
    {
      breakpoint: '800px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '660px',
      numVisible: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
