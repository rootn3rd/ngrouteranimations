import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appHammertime]'
})
export class HammertimeDirective {
  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();

  constructor() {}

  @HostListener('tap', ['$event'])
  tapEvent(e) {
    if (e.tapCount == 2) {
      this.doubleTap.emit(e);
    } else if (e.tapCount === 3) {
      this.tripleTap.emit(e);
    }
  }
}
