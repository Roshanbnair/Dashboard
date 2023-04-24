import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  // user defined  event creation
  // @output-TO share data from child to parent
  @Output() onMenuBtnClicked = new EventEmitter();

  menuBtnClicked() {

    // To occur user defined event
    this.onMenuBtnClicked.emit();

    // To resize the screen
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 100);
  }
}
