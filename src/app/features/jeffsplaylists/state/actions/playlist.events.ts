import { createAction, props } from '@ngrx/store';
import { PlaylistItemCreateModel } from './types';

export const playlistItemAdded = createAction(
  '[playlists events] playlist item was added',
  props<{ payload: PlaylistItemCreateModel }>()
);
