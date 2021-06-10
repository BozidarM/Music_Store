import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInstrumentsComponent } from './my-instruments.component';

describe('MyInstrumentsComponent', () => {
  let component: MyInstrumentsComponent;
  let fixture: ComponentFixture<MyInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
