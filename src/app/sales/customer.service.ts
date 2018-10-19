import { CUSTOMERS } from './mock-customer';
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

    // return CUSTOMERS.find((element) => {
    //   return element.id === id;
    // });
  }

}
