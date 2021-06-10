import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInstrumentComponent } from './insert-instrument.component';

describe('InsertInstrumentComponent', () => {
  let component: InsertInstrumentComponent;
  let fixture: ComponentFixture<InsertInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertInstrumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
