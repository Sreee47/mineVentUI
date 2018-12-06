import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopedetailsComponent } from './stopedetails.component';

describe('StopedetailsComponent', () => {
  let component: StopedetailsComponent;
  let fixture: ComponentFixture<StopedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
