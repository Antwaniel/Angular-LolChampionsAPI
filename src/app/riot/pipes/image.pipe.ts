import { Pipe, PipeTransform } from '@angular/core';
import { Champion  } from '../interfaces/champion.interface';
import { ChampionsService } from '../services/champions.service';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
champion!: string;

constructor(
  private championService:ChampionsService
){

}

  transform(champion: string):any {
    console.log(champion);
    return this.championService.getLoadingImage(champion)
    .subscribe(
        (res:any) => {
         this.champion = res
        }
    )
  }

}
