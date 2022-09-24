import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { switchMap, map } from 'rxjs/operators';
import { Champion, Datum } from '../../interfaces/champion.interface';
import { ChampionsService } from '../../services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
})
export class ChampionsComponent implements OnInit {
  champions: any[] = [];

  data: any;
  keys: any;

  loadingScreen:boolean=true;

  constructor(public championsService: ChampionsService) {}

  ngOnInit(): void {
    // this.loadChampions();
    setTimeout(() => {

      this.championsService.getChampions().subscribe((response: any) => {
      // this.champions=response
      this.keys = Object.values(response.data);
      this.champions = this.keys;
      this.loadingScreen=false;
      // console.log(this.keys);
    });

    }, 2000);

  }

  // loadChampions() {

  // }
}
