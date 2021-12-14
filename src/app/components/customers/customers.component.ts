import { Component, OnInit } from '@angular/core';
import { faBars, faThLarge, faUser } from '@fortawesome/free-solid-svg-icons';
import { Customers } from 'src/app/customers-data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  customersIcon = faUser;
  cardViewIcon = faThLarge;
  listViewIcon = faBars;

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
