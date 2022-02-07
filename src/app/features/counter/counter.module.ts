import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { RouterModule, Routes } from '@angular/router';
import { CountUiComponent } from './components/count-ui/count-ui.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from '../state';

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
  ],
})
export class CounterModule {}
