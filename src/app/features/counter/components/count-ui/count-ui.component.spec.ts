import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUiComponent } from './count-ui.component';

describe('CountUiComponent', () => {
  let component: CountUiComponent;
  let fixture: ComponentFixture<CountUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
