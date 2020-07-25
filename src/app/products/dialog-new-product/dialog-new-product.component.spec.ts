import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewProductComponent } from './dialog-new-product.component';

describe('DialogNewProductComponent', () => {
  let component: DialogNewProductComponent;
  let fixture: ComponentFixture<DialogNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
