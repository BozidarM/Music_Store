import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEquipmentComponent } from './my-equipment.component';

describe('MyEquipmentComponent', () => {
  let component: MyEquipmentComponent;
  let fixture: ComponentFixture<MyEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
