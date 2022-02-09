export const featureName = 'playlistsFeature';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as models from '../models';
import * as fromPlaylist from './reducers/list.reducer';

export interface PlaylistsState {
  list: fromPlaylist.PlaylistListState;
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  list: fromPlaylist.reducer,
};

// Feature Selector
const selectFeature = createFeatureSelector<PlaylistsState>(featureName);
// Selector Per Branch

const selectListBranch = createSelector(
  selectFeature, // = PlaylistState
  (f) => f.list // PlayListListState
);
//  Helpers (optional)

const {
  selectAll: selectPlaylistEntityArray,
  selectTotal: selectNumberOfSongsInPlaylist,
} = fromPlaylist.adapter.getSelectors(selectListBranch);
// What the components need

// TODO: PlaylistItemViewModel[]

export const selectPlayListViewModel = createSelector(
  selectPlaylistEntityArray,
  (a): models.PlaylistItemViewModel[] => a
);

export const selectNumberOfSongs = selectNumberOfSongsInPlaylist;
