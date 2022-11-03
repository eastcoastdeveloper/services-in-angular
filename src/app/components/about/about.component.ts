import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowWidthService } from '../../services/window-width.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit, OnDestroy {
  windowWidth: number;
  windowWidthSubscription: Subscription;

  constructor(private _windowWidth: WindowWidthService) {}

  ngOnInit() {
    this.windowWidthSubscription = this._windowWidth.currentWidth$.subscribe(
      (currentVal) => {
        this.windowWidth = currentVal;
      }
    );
  }

  ngOnDestroy() {
    this.windowWidthSubscription.unsubscribe();
  }
}
