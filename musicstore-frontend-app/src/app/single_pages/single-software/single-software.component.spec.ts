import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSoftwareComponent } from './single-software.component';

describe('SingleSoftwareComponent', () => {
  let component: SingleSoftwareComponent;
  let fixture: ComponentFixture<SingleSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
