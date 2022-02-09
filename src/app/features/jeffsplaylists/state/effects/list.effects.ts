import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { PlaylistsDataService } from '../../services/playlists-data.service';
import * as commands from '../actions/playlist.commands';
import * as documents from '../actions/playlist.documents';

@Injectable()
export class ListEffects {
  // when we are told to load the list, we go to the service, ask it to get them, then return a Document.

  saveAPlaylistItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.savePlaylistItem),
      mergeMap(({ payload }) =>
        this.service
          .addItem(payload)
          .pipe(map((payload) => documents.playListItem({ payload })))
      )
    );
  });

  loadThePlaylist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commands.loadThePlaylists),
      mergeMap(() =>
        this.service
          .getPlaylists()
          .pipe(map((payload) => documents.playList({ payload })))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: PlaylistsDataService
  ) {}
}
