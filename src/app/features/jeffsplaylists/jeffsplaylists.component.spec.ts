import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffsplaylistsComponent } from './jeffsplaylists.component';

describe('JeffsplaylistsComponent', () => {
  let component: JeffsplaylistsComponent;
  let fixture: ComponentFixture<JeffsplaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeffsplaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffsplaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
