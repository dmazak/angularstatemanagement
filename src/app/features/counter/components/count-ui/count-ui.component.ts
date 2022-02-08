import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountUIViewModel } from '../../models';
import { selectCountUiCurrent } from '../../state';
import * as events from '../../state/actions/counter.events';
@Component({
  selector: 'app-count-ui',
  templateUrl: './count-ui.component.html',
  styleUrls: ['./count-ui.component.css'],
})
export class CountUiComponent implements OnInit {
  model$!: Observable<CountUIViewModel>;

  constructor(private store: Store) {
    // we don't do a lot in the constructor in an angular component.
  }

  ngOnInit(): void {
    this.model$ = this.store.select(selectCountUiCurrent);
  }

  increment() {
    this.store.dispatch(events.incrementClicked());
  }

  decrement() {
    this.store.dispatch(events.decrementClicked());
  }
}
