import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],

})
export class FilterComponent {
  @Output() onFilterShow = new EventEmitter<boolean>();
  ngOnInit() {
    let popup: any = document.querySelector('#filter-back')
    popup.addEventListener('click', (e: any) => {
      if (!e.target.closest('.filter')) {
        this.onFilterShow.emit(false);
      }
    })
  }

  acceptNumber(event:any){
    if (event) {
      let e = <KeyboardEvent> event;
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      }
  }
}


