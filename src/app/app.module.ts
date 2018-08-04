import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterContainerComponent } from './containers/counter.container';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './reducers/counter.reducer';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
    CounterComponent,
    CounterControlsComponent
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
