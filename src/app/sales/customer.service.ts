import { CUSTOMERS } from './mock-customer';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Customer {
    // return this.getCustomers().pipe(
    //   map((customer: Customer[]) => customer.find(cust => cust.id === +id))
    // );
    return CUSTOMERS.find((element) => {
      return element.id === id;
    });
  }

}
