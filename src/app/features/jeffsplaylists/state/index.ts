export const featureName = 'playlistsFeature';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPlaylist from './reducers/list.reducer';

export interface PlaylistsState {
  list: fromPlaylist.PlaylistListState;
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  list: fromPlaylist.reducer,
};
