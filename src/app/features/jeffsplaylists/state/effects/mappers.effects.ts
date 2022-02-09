// This is the effect that is going to turn the events into commands.

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as featureEvents from '../actions/playlist-feature.events';
import * as commands from '../actions/playlist.commands';
import * as events from '../actions/playlist.events';
@Injectable()
export class MapperEffects {
  // turn events into commands.

  savePlaylistItem = createEffect(() => {
    return this.actions$.pipe(
      ofType(events.playlistItemAdded), // { type: 'kjkjerui', paylaod: { title: ''}}
      map(({ payload }) => commands.savePlaylistItem({ payload }))
    );
  });

  loadListOnStartup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureEvents.playlistFeatureStarted),
      map(() => commands.loadThePlaylists())
    );
  });

  constructor(private actions$: Actions) {}
}
