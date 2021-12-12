import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICustomer } from 'src/app/model/icustomer';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from '../customer-orders/customer-orders.component';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input()
  public customerData: ICustomer = {} as ICustomer;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onViewOrders() {
    this.dialog.open(CustomerOrdersComponent);
  }

  onEditClicked() {
    this.dialog.open(CustomerDetailComponent);
  }

}
