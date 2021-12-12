import { Component, Inject, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/model/icustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerDetail: ICustomer = {} as ICustomer;
  name: string = "";
  originState: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
