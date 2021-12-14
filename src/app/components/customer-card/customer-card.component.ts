import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Gender } from 'src/app/model/gender';
import { ICustomer } from 'src/app/model/icustomer';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from '../customer-orders/customer-orders.component';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input()
  public customerData: ICustomer = {} as ICustomer;

  @Output()
  public dataChangedEvent = new EventEmitter<boolean>();

  editIcon = faEdit;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onViewOrders() {
    this.dialog.open(CustomerOrdersComponent, {
      data: {
        customer: this.customerData
      }
    });
  }

  public onEditClicked() {
    this.dialog.open(CustomerDetailComponent, {
      data: {
        customer: this.customerData
      }
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.dataChangedEvent.emit(true);
    });
  }

  public getImagePathByValue(gender: Gender | undefined) {
    switch (gender) {
      case Gender.male:
        return "assets/pics/male.png";
      case Gender.female:
        return "assets/pics/female.png";
      default:
        return "";
    }
  }

}
