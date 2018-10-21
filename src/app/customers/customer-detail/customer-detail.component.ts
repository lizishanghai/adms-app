import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer$: Observable<Customer>;
  alerts: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService) { }

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCustomer(+params.get('id')))
    );
  }

  gotoCustomers(customer: Customer) {
    const customerId = customer ? customer.id : null;
    this.router.navigate(['/customers', {id: customerId}]);
  }

  onSubmit(customer: Customer, valid: boolean) {
    if (valid) {
      this.service.putCustomer(customer).subscribe(obj => {
        console.log(<Customer>obj);
        this.alerts = 'Save succeed';
      },
      err => {
        this.alerts = 'Save Failed';
      });
    }
}

}
