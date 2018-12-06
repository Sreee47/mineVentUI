import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopefourComponent } from './stopefour.component';

describe('StopefourComponent', () => {
  let component: StopefourComponent;
  let fixture: ComponentFixture<StopefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
