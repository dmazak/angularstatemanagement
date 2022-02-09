import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as events from '../../state/actions/playlist.events';
import { PlaylistItemCreateModel } from '../../state/actions/types';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      artist: [''],
      album: [''],
      yearReleased: [''],
    });
  }

  get title() {
    return this.form.get('title');
  }

  addSong(foci: HTMLInputElement) {
    if (this.form.valid) {
      const payload: PlaylistItemCreateModel = {
        ...this.form.value,
        yearReleased: parseInt(this.form.get('yearReleased')?.value),
      };
      this.store.dispatch(events.playlistItemAdded({ payload }));
      this.form.reset();
      foci.focus();
    } else {
      /// https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field); //{3}
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
