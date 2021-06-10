import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstrumentsComponent } from './update-instruments.component';

describe('UpdateInstrumentsComponent', () => {
  let component: UpdateInstrumentsComponent;
  let fixture: ComponentFixture<UpdateInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
