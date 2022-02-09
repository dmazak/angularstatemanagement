// This is the effect that is going to turn the events into commands.

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as featureEvents from '../actions/playlist-feature.events';
import * as commands from '../actions/playlist.commands';

@Injectable()
export class MapperEffects {
  // turn events into commands.

  loadListOnStartup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureEvents.playlistFeatureStarted),
      map(() => commands.loadThePlaylists())
    );
  });

  constructor(private actions$: Actions) {}
}
