import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CustomerDetailComponent } from 'src/app/components/customer-detail/customer-detail.component';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-edit-customer-button',
  templateUrl: './edit-customer-button.component.html',
  styleUrls: ['./edit-customer-button.component.css']
})
export class EditCustomerButtonComponent implements ICellRendererAngularComp {

  editIcon = faEdit;
  params: any = null;

  constructor(private dialog: MatDialog, private customerService: CustomerService) { }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onClick() {
    this.dialog.open(CustomerDetailComponent, {
      data: {
        customer: this.params.data
      }
    });
    this.dialog.afterAllClosed.subscribe(() => {
      console.log(this.params.api.redrawRows)
      this.params.api.setRowData(this.customerService.getData())
    });
  }

}
