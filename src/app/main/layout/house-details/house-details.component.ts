import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core'; 
import { HouseDataTypes } from '../house-list/houses';

declare var $:any;
export const buttonAnimation = trigger('buttonAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100%)' }),
    animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('0.5s', style({ opacity: 0, transform: 'translateX(100%)' }))
  ])
]);
export const divAnimation = trigger('divAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('0.5s', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('0.5s', style({ transform: 'translateX(100%)' }))
  ])
]);
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent {
  @Input() house!:HouseDataTypes;
  @Output() onCloseHouseDetail = new EventEmitter<Object>();

  closeHouseDetail(){
    this.onCloseHouseDetail.emit('close')
  }
  doFavourite(house:HouseDataTypes){
  
    house.isFavourite = !house.isFavourite;
  }
  showNumbers(value:any){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}
