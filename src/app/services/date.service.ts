import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  todaysDate: any = new Date();
  day: number = this.todaysDate.getDate();
  year: number = this.todaysDate.getFullYear();
  month: number = this.todaysDate.getMonth();
  months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  currentMonth: any = this.months[this.month];
  fullDate: any = `${this.currentMonth} ${this.day}, ${this.year}`;
}
