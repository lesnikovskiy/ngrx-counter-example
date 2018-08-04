import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-link-controls',
  templateUrl: './counter-link-controls.component.html',
  styleUrls: ['./counter-link-controls.component.css']
})
export class CounterLinkControlsComponent {
  @Input() count: number;

  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();
  @Output() reset = new EventEmitter();
}
