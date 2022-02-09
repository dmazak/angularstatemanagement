import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeffsplaylistsComponent } from './jeffsplaylists.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JeffsplaylistsComponent,
  },
];

@NgModule({
  declarations: [JeffsplaylistsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class JeffsplaylistsModule {}
