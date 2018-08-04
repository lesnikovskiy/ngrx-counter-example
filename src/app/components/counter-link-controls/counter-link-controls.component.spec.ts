import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLinkControlsComponent } from './counter-link-controls.component';

describe('CounterLinkControlsComponent', () => {
  let component: CounterLinkControlsComponent;
  let fixture: ComponentFixture<CounterLinkControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterLinkControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLinkControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
