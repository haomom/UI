import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspense-accounts',
  templateUrl: './suspense-accounts.component.html',
  styleUrls: ['./suspense-accounts.component.css']
})
export class SuspenseAccountsComponent implements OnInit {

  constructor() { }

  public gridData: any[] = [{"ProductId": "1", "ProductName": "Prod1"}, {"ProductId": "2", "ProductName": "Prod2"}];

  ngOnInit() {
  }

}
