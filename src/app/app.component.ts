import { Component } from '@angular/core';
import { WindowWidthService } from './services/window-width.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  width: number;

  constructor(private _windowWidth: WindowWidthService) {}

  onResize(event: any) {
    this.width = event.target.innerWidth;
    this._windowWidth.changeValue(this.width);
  }
}
