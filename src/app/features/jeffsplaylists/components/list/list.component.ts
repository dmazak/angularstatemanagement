import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlaylistItemViewModel } from '../../models';
import { selectPlayListViewModel } from '../../state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  model$!: Observable<PlaylistItemViewModel[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = this.store.select(selectPlayListViewModel);
  }
}
