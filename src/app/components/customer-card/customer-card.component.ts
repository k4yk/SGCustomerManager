import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/model/icustomer';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input()
  public customerData: ICustomer = {} as ICustomer;

  constructor() { }

  ngOnInit(): void {
  }

  onViewOrders() {

  }

  onEditClicked() {
    
  }

}
