import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
const HTTP_URL = 'http://localhost:3000/customers';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(HTTP_URL);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(HTTP_URL + '/' + id);
  }

  putCustomer(customer: Customer): Observable<object> {
    return this.http.put(HTTP_URL + '/' + customer.id, customer);
 }

}
