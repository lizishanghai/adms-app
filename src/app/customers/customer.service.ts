import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  customerList: AngularFireList<any>;

  constructor(private http: HttpClient,
    private firebase: AngularFireDatabase) { }


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email:  '',
      mobile: '',
      city:  '',
      gender:  '1',
      department: 0,
      hireDate:  '',
      isPermanent: false
    });
  }

  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      city: customer.city,
      gender: customer.gender,
      department: customer.department,
      hireDate: customer.hireDate,
      isPermanent: customer.isPermanent
    });
  }

  updateCustomer(customer) {
    this.customerList.update(customer.$key, {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      city: customer.city,
      gender: customer.gender,
      department: customer.department,
      hireDate: customer.hireDate,
      isPermanent: customer.isPermanent
    });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(HTTP_URL + '/' + id);
  }

  putCustomer(customer: Customer): Observable<object> {
    return this.http.put(HTTP_URL + '/' + customer.id, customer);
 }

}
