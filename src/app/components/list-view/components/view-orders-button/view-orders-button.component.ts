import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CustomerOrdersComponent } from 'src/app/components/customer-orders/customer-orders.component';

@Component({
  selector: 'app-view-orders-button',
  templateUrl: './view-orders-button.component.html',
  styleUrls: ['./view-orders-button.component.css'],
})
export class ViewOrdersButtonComponent implements ICellRendererAngularComp {

  ordersIcon = faListAlt;
  params: any = null;

  constructor(private dialog: MatDialog) { }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onClick() {
    this.dialog.open(CustomerOrdersComponent, {
      data: {
        customer: this.params.data
      }
    });
  }

}
