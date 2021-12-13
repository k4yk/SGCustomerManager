import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerValidationService } from 'src/app/customer-validation.service';
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
  validationResults: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public customer: any,
    private service: CustomerService,
    private dialogRef: MatDialogRef<CustomerDetailComponent>,
    private validationService: CustomerValidationService) {
    this.name = customer.customer.name;
    this.originState = customer.customer.originState;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const customerDataToSave = this.createDataToSave();
    const validationResult = this.validationService.validate(customerDataToSave.name, customerDataToSave.originState);
    if (validationResult.length === 0) {
      this.isValid = true;
      this.service.saveData(customerDataToSave);
      this.dialogRef.close();
    } else {
      this.validationResults = validationResult;
      this.isValid = false;
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
