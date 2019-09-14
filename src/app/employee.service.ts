import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl:string = 'http://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient) { }
  getemployee(): Observable<any> {
    return this.http.get( this.baseUrl + '/employees');
  }

createemployee(employee: Object): Observable<Object>{
  return this.http.get( this.baseUrl + '/create', employee);
}
}
