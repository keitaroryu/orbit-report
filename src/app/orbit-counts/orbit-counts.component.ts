import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  counterArray: object[];

  constructor() { 
    this.counterArray = [];

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.typeCounter(this.satellites);
  }

  typeCounter(displayList){
    this.counterArray = [];
    this.counterArray.push({'type': 'Total','count': displayList.length});
    let typeCheckArray: string[] = [];
    let counter: number = 0;
    for(let satelliteA of displayList){
      if(!typeCheckArray.includes(satelliteA['type'])){
        typeCheckArray.push(satelliteA['type']);
        counter = 0;
        for(let satelliteB of displayList){
          if(satelliteA['type']===satelliteB['type']){
            counter += 1;
          }
        }
        this.counterArray.push({'type': satelliteA['type'],'count': counter});
      }
    }
  }

}
