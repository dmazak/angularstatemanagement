import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountResetComponent } from './count-reset.component';

describe('CountResetComponent', () => {
  let component: CountResetComponent;
  let fixture: ComponentFixture<CountResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
