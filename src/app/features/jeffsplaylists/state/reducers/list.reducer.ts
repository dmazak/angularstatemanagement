import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as documents from '../actions/playlist.documents';
export interface PlaylistItemEntity {
  id: string;
  title: string;
  artist?: string;
  album?: string;
  yearReleased?: number;
}

export interface PlaylistListState extends EntityState<PlaylistItemEntity> {}

export const adapter = createEntityAdapter<PlaylistItemEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(documents.playListItem, (s, a) => adapter.addOne(a.payload, s)),
  on(documents.playList, (s, a) => adapter.setAll(a.payload, s))
);
