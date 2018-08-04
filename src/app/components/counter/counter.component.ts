import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count: number;
  @Input() up: boolean;
  @Input() down: boolean;
  @Input() initial: boolean;

  getClassType(): string {
    if (this.up) {
      return 'up';
    }

    if (this.down) {
      return 'down';
    }

    if (this.initial) {
      return 'initial';
    }

    return '';
  }
}
