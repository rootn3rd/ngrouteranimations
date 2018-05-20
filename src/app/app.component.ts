import { Component } from '@angular/core';
import { routerTransition } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'app';

  prepareRouter(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
