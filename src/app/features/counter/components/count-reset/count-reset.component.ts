import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectResetDisabled } from '../../state';
import * as events from '../../state/actions/counter.events';

@Component({
  selector: 'app-count-reset',
  template: `<button
    [disabled]="resetDisabled$ | async"
    (click)="doIt()"
    class="btn btn-danger"
  >
    Reset
  </button>`,
  styleUrls: ['./count-reset.component.css'],
})
export class CountResetComponent implements OnInit {
  resetDisabled$!: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.resetDisabled$ = this.store.select(selectResetDisabled);
  }

  doIt() {
    this.store.dispatch(events.countReset());
  }
}
