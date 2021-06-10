import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSoftwaresComponent } from './update-softwares.component';

describe('UpdateSoftwaresComponent', () => {
  let component: UpdateSoftwaresComponent;
  let fixture: ComponentFixture<UpdateSoftwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSoftwaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSoftwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
