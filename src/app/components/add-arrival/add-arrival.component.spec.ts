import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArrivalComponent } from './add-arrival.component';

describe('AddArrivalComponent', () => {
  let component: AddArrivalComponent;
  let fixture: ComponentFixture<AddArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
