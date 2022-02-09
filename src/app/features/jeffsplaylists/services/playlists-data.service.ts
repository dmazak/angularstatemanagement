import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaylistItemCreateModel } from '../state/actions/types';
import { PlaylistItemEntity } from '../state/reducers/list.reducer';

@Injectable()
export class PlaylistsDataService {
  readonly apiUrl = environment.apiUrl + '/asm/v1/playlists?delaySeconds=5';

  addItem(item: PlaylistItemCreateModel): Observable<PlaylistItemEntity> {
    return this.httpClient.post<PlaylistItemEntity>(this.apiUrl, item);
  }

  getPlaylists(): Observable<PlaylistItemEntity[]> {
    return this.httpClient
      .get<{ data: PlaylistItemEntity[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
  constructor(private httpClient: HttpClient) {}
}
