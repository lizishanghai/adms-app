import { DepartmentService } from './../department.service';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';

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
    private service: CustomerService,
    private departmentService: DepartmentService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.service.getCustomers();
  }

  gotoCustomers(customer: Customer) {
    const customerId = customer ? customer.id : null;
    this.router.navigate(['/customers', {id: customerId}]);
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success('::Submitted successfully');

  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertCustomer(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('::Submitted successfully');
    }
  }
}
