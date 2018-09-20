import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public info(message: string): void {
    console.log(`INFO: ${message}`);
  }

  public warn(message: string): void {
    console.log(`WARN: ${message}`);
  }

  public error(message: string, operation: string, error: string): void {
    console.error(`ERROR in operation '${operation}': ${message} ${error}`);
  }
}
