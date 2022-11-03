import { Component } from '@angular/core';
import { WindowWidthService } from '../../services/window-width.service';
import { DateService } from '../../services/date.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  windowWidth: number;
  currentDate: any;
  windowWidthSubscription: Subscription;
  dateSubscription: Subscription;

  constructor(
    private _windowWidth: WindowWidthService,
    private _dateService: DateService
  ) {}

  ngOnInit() {
    this.windowWidthSubscription = this._windowWidth.currentWidth$.subscribe(
      (currentVal) => {
        this.windowWidth = currentVal;
      }
    );
    this.currentDate = this._dateService.fullDate;
  }

  ngOnDestroy() {
    this.windowWidthSubscription.unsubscribe();
  }
}
