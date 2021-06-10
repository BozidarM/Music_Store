import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAccessoryComponent } from './single-accessory.component';

describe('SingleAccessoryComponent', () => {
  let component: SingleAccessoryComponent;
  let fixture: ComponentFixture<SingleAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAccessoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
