import { Component, OnInit, ViewChild } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { TestComponent } from './test/test.component';
import { GBaseCredentials } from './../../models/g-base-credentials';
import { SelectableDirective } from '../../../../node_modules/@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-g-base-credentials',
  templateUrl: './g-base-credentials.component.html',
  styleUrls: ['./g-base-credentials.component.scss']
})
export class GBaseCredentialsComponent implements OnInit {

  @ViewChild(EditComponent)
  editDialog: EditComponent

  @ViewChild(TestComponent)
  testDialog: TestComponent

  selectedRow: GBaseCredentials

  constructor() { }

  public gridData: any[] = [
    {"Username": "MHCB\\ahmeya", "Branch": "London", "UserId": "LN12345", "EmployeeId": "12345", "Expires": "30-Sep-2018"}, 
    {"Username": "MHCB\\ahmeya", "Branch": "Milan", "UserId": "ML56789", "EmployeeId": "12345", "Expires": "1-Oct-2018"}
  ];

  ngOnInit() {
  }

  public openEdit() {
    this.editDialog.open();
    this.selectedRow = new GBaseCredentials();
    this.selectedRow.GBaseEmployeeId = "Edit";
    this.selectedRow.Branch="Milan";
  }

  public openTest() {
    this.testDialog.open();
    this.selectedRow = new GBaseCredentials();
    this.selectedRow.GBaseEmployeeId = "Test";
  }

}
