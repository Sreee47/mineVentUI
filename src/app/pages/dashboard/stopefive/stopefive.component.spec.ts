import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopefiveComponent } from './stopefive.component';

describe('StopefiveComponent', () => {
  let component: StopefiveComponent;
  let fixture: ComponentFixture<StopefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
