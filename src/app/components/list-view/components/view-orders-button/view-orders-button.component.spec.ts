import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersButtonComponent } from './view-orders-button.component';

describe('ViewOrdersButtonComponent', () => {
  let component: ViewOrdersButtonComponent;
  let fixture: ComponentFixture<ViewOrdersButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
