import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/model/icustomer';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  public customers: ICustomer[] = [];

  constructor() { }

  ngOnInit(): void {
    const customersJson = JSON.parse(localStorage.getItem("customers")!);
    const customers = Array.from(customersJson).map((c: any) => {
      return {
        id: c.id,
        name: c.name,
        gender: c.gender,
        originState: c.originState,
        orders: c.orders
      } as ICustomer;
    });
    this.customers = customers;
  }

}
