import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {
  @Input() count: number;
  @Input() up: boolean;
  @Input() down: boolean;
  @Input() initial: boolean;
}
