import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionsService } from '../../services/champions.service';
import { switchMap } from 'rxjs/operators';
import {
  baseURL,
  loadingScreens,
  passiveIMG,
  splashScreens,
  version,
} from 'src/app/endpoints';
import { spellImages } from '../../../endpoints';
import { AbilityComponent } from '../../components/ability/ability.component';

@Component({
  selector: 'app-view-champion',
  templateUrl: './view-champion.component.html',
  styleUrls: ['./view-champion.component.css'],
})
export class ViewChampionComponent implements OnInit {
  // ENDPOINTS
  baseURL: string = baseURL;
  loadingScreens: string = loadingScreens;
  splashScreens: string = splashScreens;
  version: string = version;
  spellImages: string = spellImages;
  passiveImage: string = passiveIMG;

  showPassive: boolean = true;

  spells: any[] = ['Q', 'W', 'E', 'R'];

  // OUTPUTS
  @Output() champion: any;
  @Output() loadSpellInfo: boolean = false;
  spellCappital: any;
  videoSource: any;
  // variables
  keys: any;
  skins: any;
  info: any;

  spell: any;

  obj: any = new AbilityComponent();
  championKey: any;
  keyOrdened: any;

  //  Conditions
  loadingScreen: boolean = true;

  constructor(
    private championsService: ChampionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.championsService.getChampionbyId(id)))
      .subscribe((response: any) => {
        this.keys = Object.values(response.data);
        this.champion = this.keys[0];

        this.skins = this.champion.skins;
        // console.log(this.champion);
        // this.championKey=this.champion.key;
        this.getKeyInfo(this.champion.key);
        //  console.log(this.champion.skins);
      });

    setTimeout(() => {
      this.loadingScreen = false;
    }, 2000);

    // this.loadInfo();
  }

  getKeyInfo(key: any) {
    this.championKey = key;

    // console.log(key);

    // console.log('length:', key.length);

    // console.log(typeof key);

    switch (this.championKey.length) {
      case 1:
        this.keyOrdened = '000' + this.championKey;
        // console.log(this.keyOrdened);
        break;

      case 2:
        this.keyOrdened = '00' + this.championKey;
        // console.log(this.keyOrdened);
        break;

      case 3:
        this.keyOrdened = '0' + this.championKey;
        // console.log(this.keyOrdened);
        break;

      default:
        break;
    }
  }

  mostrarPassiva() {
    this.showPassive = true;
  }

  loadInfo(spell: any, spellKey: any) {
    this.showPassive = false;
    this.spell = spell;
    this.loadSpellInfo = true;
    // console.log(spellKey);
    this.spellCappital = spellKey;

    this.videoSource = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${this.keyOrdened}/ability_${this.keyOrdened}_${this.spellCappital}1.webm`;

    // console.log(this.videoSource);
    // this.obj.getVideo(this.videoSource);
  }
}
