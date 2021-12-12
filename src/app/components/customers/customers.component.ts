import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/customers-data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem("customers")) {
      localStorage.setItem("customers", JSON.stringify(Customers));
    }
  }

  public title = "Customers";

}
