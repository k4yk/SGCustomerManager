import { Injectable } from '@angular/core';
import { ICustomer } from './model/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public getData(): ICustomer[] {
    const customersJson = JSON.parse(localStorage.getItem("customers")!);
    return Array.from(customersJson).map((c: any) => {
      return {
        id: c.id,
        name: c.name,
        gender: c.gender,
        originState: c.originState,
        orders: c.orders
      } as ICustomer;
    });
  }

  public saveData(customer: ICustomer) {
    const customers = this.getData();
    const currentCustomer = customers.find(i => i.id === customer.id);
    if (currentCustomer !== null && currentCustomer !== undefined) {
      currentCustomer.name = customer.name;
      currentCustomer.originState = customer.originState;
    }
    localStorage.setItem("customers", JSON.stringify(customers));
  }
}
