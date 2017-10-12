import { Component, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Progress } from '../../shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  donate: number[] = [];
  donors: number = 42;
  goal: number = 350000;
  raised: number = 250000;
  title: string = 'Donate';

  constructor() { }

  get balance(): number {
    return Math.max(0, this.goal - this.raised)
  }

  get progress(): Progress {
    return {
      goal: this.goal,
      raised: this.raised
    }
  }  

  save(value: number) {
    this.donate.push(value)
    console.log(this.donate)
  }

  submit(event: EventEmitter<any>) {
    if (typeof event === 'number') this.updateDonation(event)
  }

  updateDonation(value: number) {
    this.raised = this.raised + value
    this.donors++
  }
}
