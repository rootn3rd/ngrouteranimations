import { Component, OnInit, HostBinding } from '@angular/core';
import { demoTransition } from '../animations/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  animations: [demoTransition],
  host: {
    '[@demoTransition]': ''
  }
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
