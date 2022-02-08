import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountUiComponent } from './components/count-ui/count-ui.component';
import { CounterComponent } from './counter.component';
import { featureName, reducers } from './state';
import { CounterEffects } from './state/effects/counter.effects';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent, CountUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule {}
