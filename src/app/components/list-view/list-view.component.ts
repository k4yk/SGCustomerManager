import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, ICellRendererParams } from 'ag-grid-community';
import { CustomerService } from 'src/app/customer.service';
import { Gender } from 'src/app/model/gender';
import { ICustomer } from 'src/app/model/icustomer';
import { ViewOrdersButtonComponent } from './components/view-orders-button/view-orders-button.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.rowData = this.customerService.getData();
  }

  columnDefinitions: (ColDef | ColGroupDef)[] | null | undefined = [
    { headerName: "Name", field: "name", sortable: true },
    { headerName: "Gender", field: "gender", sortable: true, cellRenderer: this.renderGenderRow },
    { headerName: "Origin state", field: "originState", sortable: true },
    { headerName: "Orders", field: "", cellRendererFramework: ViewOrdersButtonComponent }
  ];

  rowData: ICustomer[] = [];

  private renderGenderRow(params: ICellRendererParams) {
    switch (params.value) {
      case Gender.male:
        return "Male";
      case Gender.female:
        return "Female";
      default:
        return "";
    }
  }

}
