import { createAction, props } from '@ngrx/store';
import { PlaylistItemEntity } from '../reducers/list.reducer';

export const playList = createAction(
  '[playlist document] playlist',
  props<{ payload: PlaylistItemEntity[] }>()
);

export const playListItem = createAction(
  '[playlist document] playlist item',
  props<{ payload: PlaylistItemEntity }>()
);
