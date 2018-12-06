import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopesixComponent } from './stopesix.component';

describe('StopesixComponent', () => {
  let component: StopesixComponent;
  let fixture: ComponentFixture<StopesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
