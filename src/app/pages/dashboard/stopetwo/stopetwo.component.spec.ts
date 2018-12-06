import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopetwoComponent } from './stopetwo.component';

describe('StopetwoComponent', () => {
  let component: StopetwoComponent;
  let fixture: ComponentFixture<StopetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
