import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountingBy } from '../../state';
import * as events from '../../state/actions/counter.events';
@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css'],
})
export class CountByComponent implements OnInit {
  by$!: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.by$ = this.store.select(selectCountingBy);
  }

  doIt(payload: number) {
    this.store.dispatch(events.countBySet({ payload }));
  }
}
