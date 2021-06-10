import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSoftwareComponent } from './insert-software.component';

describe('InsertSoftwareComponent', () => {
  let component: InsertSoftwareComponent;
  let fixture: ComponentFixture<InsertSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
