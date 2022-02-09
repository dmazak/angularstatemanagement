import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { OverviewComponent } from './components/overview/overview.component';
import { JeffsplaylistsComponent } from './jeffsplaylists.component';
import { PlaylistsDataService } from './services/playlists-data.service';
import { featureName, reducers } from './state';
import { ListEffects } from './state/effects/list.effects';
import { MapperEffects } from './state/effects/mappers.effects';

const routes: Routes = [
  {
    path: '',
    component: JeffsplaylistsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'entry',
        component: EntryComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
];

@NgModule({
  declarations: [
    JeffsplaylistsComponent,
    OverviewComponent,
    ListComponent,
    EntryComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([MapperEffects, ListEffects]),
    ReactiveFormsModule,
  ],
  providers: [PlaylistsDataService],
})
export class JeffsplaylistsModule {}
