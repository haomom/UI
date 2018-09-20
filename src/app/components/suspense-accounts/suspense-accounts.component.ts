import { Component, OnInit } from '@angular/core';
import { SuspenseAccountService } from './../../services/suspense-account/suspense-account.service';

@Component({
  selector: 'app-suspense-accounts',
  templateUrl: './suspense-accounts.component.html',
  styleUrls: ['./suspense-accounts.component.css'],
  providers: [SuspenseAccountService]
})
export class SuspenseAccountsComponent implements OnInit {

  constructor(private suspenseAccService: SuspenseAccountService) { }

  public gridData: any[] = [{"ProductId": "1", "ProductName": "Prod1"}, {"ProductId": "2", "ProductName": "Prod2"}];

  ngOnInit() {
    this.getSuspenseAccounts();
  }

  getSuspenseAccounts(): void {
    this.suspenseAccService.getSuspenseAccountPage("", "", 1, 3)
      .subscribe(accounts => console.log(accounts));
  }
}
