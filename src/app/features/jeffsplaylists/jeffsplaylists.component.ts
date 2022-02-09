import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { playlistFeatureStarted } from './state/actions/playlist-feature.events';
@Component({
  selector: 'app-jeffsplaylists',
  templateUrl: './jeffsplaylists.component.html',
  styleUrls: ['./jeffsplaylists.component.css'],
})
export class JeffsplaylistsComponent implements OnInit {
  constructor(private store: Store) {}

  ready = true;
  ngOnInit(): void {
    this.store.dispatch(playlistFeatureStarted());
  }
}
