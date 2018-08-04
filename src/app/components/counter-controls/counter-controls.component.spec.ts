import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControlsComponent } from './counter-controls.component';

describe('CounterControlsComponent', () => {
  let component: CounterControlsComponent;
  let fixture: ComponentFixture<CounterControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
