import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ChampionsService } from '../../riot/services/champions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  error: boolean = false;
  champion: any;
@ViewChild('input') inputName:any;


  items: MenuItem[] = [];

  constructor(
    private championService: ChampionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = [

      {
        label: 'All Champions',
        icon: 'pi pi-tag',
        routerLink: 'champions',
      },
    ];
  }

  getInfo(value: any) {
    // console.log(value);
    const value2 = value.charAt(0).toUpperCase() + value.slice(1);
    const id =value2.trim();
    // console.log(id);

    this.championService.getChampionbyId(id).subscribe(
      (response) => {
        this.champion = response;
        this.router.navigate(['/view', id]);
         this.inputName.nativeElement.value = '';
      },

      (error) => {
        // console.error('error caught in component')
        this.error = true;
      } //Error callback
    );

    if (this.error) {
      return;
    }
  }
}
