import { Component, EventEmitter, Output } from '@angular/core';
import { HouseDataTypes, housesData } from './houses';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent {
  data: HouseDataTypes[] = housesData;
  @Output() onHouseDetail = new EventEmitter<HouseDataTypes>();
  focusIn:boolean = false;
  openHouseDetails(house:HouseDataTypes) {
    if(this.focusIn){
      return;
    }
    this.onHouseDetail.emit(house)
  }

  doFavourite(house:HouseDataTypes){
    house.isFavourite = !house.isFavourite;
  }

  focuslost(){
    this.focusIn = false;
  }

  focus(){
    this.focusIn = true;
  }

  showNumbers(value:any){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  
}
