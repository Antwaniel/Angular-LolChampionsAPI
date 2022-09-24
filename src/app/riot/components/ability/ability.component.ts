import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
 @Input() champion:any;
 @Input() spell:any;

 show:boolean =false;

 keyOrdened:any

  @Input() spellCappital:any

  @Input() videoSource:any;

  @Input() loadSpellInfo!:boolean;

  constructor() { }


  ngOnInit(): void {
  }



  getVideo(){
    console.log('del metodo:', this.videoSource);
  }


//  video(id:any, Cappital:any ){

//   this.keyOrdened=id;
//   this.spellCappital=Cappital

// console.log('ahora si:', this.spellCappital);

//   console.log(this.keyOrdened);

// //  if ( this.keyOrdened !==  '' ) {
//      this.videoSource =
//     `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${this.keyOrdened}/ability_${this.keyOrdened}_${this.spellCappital}1.webm`;
//   this.show=true;
//     console.log(this.videoSource);

//   // }




//   }






}
