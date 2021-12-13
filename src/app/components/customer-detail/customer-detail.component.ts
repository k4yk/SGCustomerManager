import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/customer.service';
import { ICustomer } from 'src/app/model/icustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  name: string = "";
  originState: string = "";

  isValid: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public customer: any, private service: CustomerService, private dialogRef: MatDialogRef<CustomerDetailComponent>) {
    this.name = customer.customer.name;
    this.originState = customer.customer.originState;
  }

  ngOnInit(): void {
  }

  save() {
    const customerDataToSave = this.createDataToSave();
    if (customerDataToSave.name.length === 0 || customerDataToSave.originState.length === 0) {
      this.isValid = false;
    } else {
      this.isValid = true;
      this.service.saveData(customerDataToSave);
      this.dialogRef.close();
      this.dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      })
    }
  }

  private createDataToSave() {
    return {
      name: this.name,
      originState: this.originState,
      id: this.customer.customer.id,
      gender: this.customer.customer.gender,
      orders: this.customer.customer.orders
    } as ICustomer;
  }

}
