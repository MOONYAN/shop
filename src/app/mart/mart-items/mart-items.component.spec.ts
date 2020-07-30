import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartItemsComponent } from './mart-items.component';

describe('MartItemsComponent', () => {
  let component: MartItemsComponent;
  let fixture: ComponentFixture<MartItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
