import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { IOrder } from 'src/app/model/iorder';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  titleIcon = faListAlt;

  constructor(@Inject(MAT_DIALOG_DATA) public customer: any, private dialogRef: MatDialogRef<CustomerOrdersComponent>) { }

  ngOnInit(): void {
    this.rowData = this.customer.customer.orders;
    this.customerName = this.customer.customer.name;
  }

  customerName: string = "";

  columnDefinitions: (ColDef | ColGroupDef)[] | null | undefined = [
    { headerName: "Order no.", field: "orderNumber", sortable: true },
    { headerName: "Item", field: "item", sortable: true },
    { headerName: "Quantity", field: "quantity", sortable: true },
    { headerName: "Ordered on", field: "orderedOn", sortable: true },
  ];

  rowData: IOrder[] = [];

  public close() {
    this.dialogRef.close();
  }

}
