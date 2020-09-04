import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartComponent } from './mart.component';

describe('MartComponent', () => {
  let component: MartComponent;
  let fixture: ComponentFixture<MartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
