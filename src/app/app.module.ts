import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FormsModule } from '@angular/forms';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { AgGridModule } from 'ag-grid-angular';
import { ViewOrdersButtonComponent } from './components/list-view/components/view-orders-button/view-orders-button.component';
import { EditCustomerButtonComponent } from './components/list-view/components/edit-customer-button/edit-customer-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    CustomerCardComponent,
    CardViewComponent,
    ListViewComponent,
    CustomerDetailComponent,
    CustomerOrdersComponent,
    ViewOrdersButtonComponent,
    EditCustomerButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AgGridModule,
    FontAwesomeModule
  ],
  exports: [
    MatDialogModule,
    AgGridModule,
    FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
