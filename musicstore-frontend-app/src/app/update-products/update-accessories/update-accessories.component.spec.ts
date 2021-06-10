import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccessoriesComponent } from './update-accessories.component';

describe('UpdateAccessoriesComponent', () => {
  let component: UpdateAccessoriesComponent;
  let fixture: ComponentFixture<UpdateAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
