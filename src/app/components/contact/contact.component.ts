import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowWidthService } from '../../services/window-width.service';
import { DateService } from '../../services/date.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit, OnDestroy {
  windowWidth: number;
  windowWidthSubscription: Subscription;
  currentDate: any;

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
