import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from  '../base.service';
import { Observable } from 'rxjs/internal/Observable';
import { SuspenseAccount } from './../../models/suspense-account'
import { PagedResult } from './../../models/paged-result'
import { LogService } from '../log/log.service'

@Injectable()
export class SuspenseAccountService extends BaseService{

  constructor(public http: HttpClient, public log: LogService) {
    super(http, log);
    this.path = "SuspenseAccounts";
  }

  public getSuspenseAccount(id: string): Observable<SuspenseAccount>{
    this.path = this.path + "/SuspenseAccount";
    return super.getById<SuspenseAccount>(id);
  }

  getSuspenseAccountPage(branch: string, currency: string, pageNumber: number, pageSize: number): Observable<PagedResult<SuspenseAccount>>{    
    return super.getByParameters([
      {name: "branch", value: branch}, 
      {name: "currency", value: currency}, 
      {name: "pageNumber", value: pageNumber.toString()}, 
      {name: "pageSize", value: pageSize.toString()}
    ]);
  }
}
