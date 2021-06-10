import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalEquipmentComponent } from './additional-equipment.component';

describe('AdditionalEquipmentComponent', () => {
  let component: AdditionalEquipmentComponent;
  let fixture: ComponentFixture<AdditionalEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
