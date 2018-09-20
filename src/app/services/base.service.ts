import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { LogService } from './log/log.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export abstract class BaseService {

  public path: string = "";
  private endpoint: string = "";

  constructor(public http: HttpClient, public log: LogService) {
    this.endpoint = environment.webApiEndpoint;
  }

  get<T>(): Observable<T> {
    return this.http.get<T>(`${this.endpoint}${this.path}`)
      .pipe(
        catchError(this.handleError('get', null))
      );
  }

  getById<T>(id: string): Observable<T> {
    return this.http.get<T>(`${this.endpoint}${this.path}/${id}`)
      .pipe(
        catchError(this.handleError('getById', null))
      );
  }

  getByParameters<T>(params: {name: string, value: string}[]): Observable<T> {
    let queryParams = new HttpParams();

    params.forEach(param => {
      queryParams = queryParams.set(param.name, param.value);
    });

    return this.http.get<T>(`${this.endpoint}${this.path}`, {params: queryParams})
      .pipe(
        catchError(this.handleError('getByParameters', null))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log.error(error.message, operation, null);

      return of(result as T);
    };
  }
}
