import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Champion } from '../interfaces/champion.interface';

import { baseURL, loadingScreens, splashScreens, version } from '../../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  champion!: string;
  // champions:Champion[] = [];
  private baseURL: string = baseURL;

  private loadingScreens: string = loadingScreens;

  private splashScreens: string = splashScreens;

  private version:string = version;

  constructor(private http: HttpClient) {}


//  getChampions(): Observable<any[]>{
//   return this.http.get<any[]>(`${ this.championsUrl}/12.6.1/data/en_US/champion.json`)
//   }


   getChampions(): Observable<any[]>{
      return this.http.get<any[]>(`${this.baseURL}/${this.version}/data/en_US/champion.json`)
  }

  // getLoadingImage(champion: string){
  //   console.log(champion);

  //   return this.http.get<string>(`${this.championsUrl}/img/champion/loading/${champion}_1.jpg`)
  // }

  getLoadingImage(champion: string){
    // console.log(champion);
    return this.http.get(`${this.loadingScreens}/${champion}_1.jpg`)
  }

  getChampionbyId(champion: any){
return this.http.get(`${this.baseURL}/${this.version}/data/en_US/champion/${champion}.json`);
  }



}
