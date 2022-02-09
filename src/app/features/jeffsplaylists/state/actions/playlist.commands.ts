import { createAction, props } from '@ngrx/store';
import { PlaylistItemCreateModel } from './types';

export const loadThePlaylists = createAction(
  '[playlists lists] load the playlists'
);

export const savePlaylistItem = createAction(
  '[playlist commands] save playlist item',
  props<{ payload: PlaylistItemCreateModel }>()
);
