import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountUiCurrent } from '../../state';
import * as events from '../../state/actions/counter.events';

@Component({
  selector: 'app-count-ui',
  templateUrl: './count-ui.component.html',
  styleUrls: ['./count-ui.component.css'],
})
export class CountUiComponent implements OnInit {
  current!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.current = this.store.select(selectCountUiCurrent);
  }
  increment() {
    this.store.dispatch(events.incrementClicked());
  }

  decrement() {
    this.store.dispatch(events.decrementClicked());
  }
}
