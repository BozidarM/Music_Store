import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInstrumentComponent } from './single-instrument.component';

describe('SingleInstrumentComponent', () => {
  let component: SingleInstrumentComponent;
  let fixture: ComponentFixture<SingleInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleInstrumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
