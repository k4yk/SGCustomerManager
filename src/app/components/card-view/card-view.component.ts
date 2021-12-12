import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { ICustomer } from 'src/app/model/icustomer';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  public customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAndSetCustomersData();
  }

  getAndSetCustomersData() {
    const customersData = this.customerService.getData();
    this.customers = customersData;
  }

}
