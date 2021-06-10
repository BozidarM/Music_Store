import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySoftwaresComponent } from './my-softwares.component';

describe('MySoftwaresComponent', () => {
  let component: MySoftwaresComponent;
  let fixture: ComponentFixture<MySoftwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySoftwaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySoftwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
