import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { cardAnimation } from '../../animations/animations';

@Component({
  selector: 'app-hammer-card',
  templateUrl: './hammer-card.component.html',
  styleUrls: ['./hammer-card.component.scss'],
  animations: [cardAnimation]
})
export class HammerCardComponent implements OnInit {
  animationState: string;

  constructor() {}

  ngOnInit() {}

  startAnimation(state: string) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
