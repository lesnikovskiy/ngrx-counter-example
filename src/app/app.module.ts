import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterContainerComponent } from './containers/counter.container';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './reducers/counter.reducer';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';
import { CounterLinkControlsComponent } from './components/counter-link-controls/counter-link-controls.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
    CounterComponent,
    CounterControlsComponent,
    CounterLinkControlsComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
