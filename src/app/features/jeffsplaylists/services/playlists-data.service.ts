import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PlaylistItemEntity } from '../state/reducers/list.reducer';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlaylistsDataService {
  readonly apiUrl = environment.apiUrl + '/asm/v1/playlists';

  getPlaylists(): Observable<PlaylistItemEntity[]> {
    return this.httpClient
      .get<{ data: PlaylistItemEntity[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
  constructor(private httpClient: HttpClient) {}
}
