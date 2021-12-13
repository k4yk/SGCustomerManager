import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerButtonComponent } from './edit-customer-button.component';

describe('EditCustomerButtonComponent', () => {
  let component: EditCustomerButtonComponent;
  let fixture: ComponentFixture<EditCustomerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
