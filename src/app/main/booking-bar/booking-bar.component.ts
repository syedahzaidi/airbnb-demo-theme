import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-booking-bar',
  templateUrl: './booking-bar.component.html',
  styleUrls: ['./booking-bar.component.scss']
})
export class BookingBarComponent {
  booking = 'Anywhere';
  @Input() showFilter: boolean = false;
  @Output() onFilterShow = new EventEmitter<boolean>();
  guest = 4;

  constructor(private renderer: Renderer2) {

  }
  onFilter() {
    this.showFilter = !this.showFilter;
    if (this.showFilter) {
      this.renderer.addClass(document.body, 'noScroll');
    }
    this.onFilterShow.emit(this.showFilter);
  }

  async openDate(e: any, date_input: any) {
    e.preventDefault();
    await date_input.showPicker();
  }

}
