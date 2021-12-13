import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/customers-data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  public view: "card" | "list" = "card";

  ngOnInit(): void {
    if (!localStorage.getItem("customers")) {
      localStorage.setItem("customers", JSON.stringify(Customers));
    }
  }

  public title = "Customers";

  public setCard() {
    this.view = "card";
  }

  public setList() {
    this.view = "list";
  }

  public isCardView() {
    return this.view === "card";
  }

}
