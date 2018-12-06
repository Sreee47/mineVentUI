import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoperthreeComponent } from './stoperthree.component';

describe('StoperthreeComponent', () => {
  let component: StoperthreeComponent;
  let fixture: ComponentFixture<StoperthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoperthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoperthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
