import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger } from '@angular/animations';
import {
  listAnimation,
  explainerAnimation,
  listPageTransition
} from '../animations/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [listPageTransition, listAnimation, explainerAnimation],
  host: {
    '[@listPageTransition]': ''
  }
})
export class ListComponent {
  items = [];

  constructor() {
    this.items = ['This is item 1', 'This is item 2', 'This is item '];
  }

  pushItem() {
    this.items.push('This is a newly added item');
  }

  removeItem() {
    this.items.pop();
  }
}
