import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSoftwaresComponent } from './music-softwares.component';

describe('MusicSoftwaresComponent', () => {
  let component: MusicSoftwaresComponent;
  let fixture: ComponentFixture<MusicSoftwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicSoftwaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSoftwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
