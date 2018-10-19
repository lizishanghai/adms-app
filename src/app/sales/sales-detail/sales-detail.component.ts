import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css']
})
export class SalesDetailComponent implements OnInit {
  sales$: Observable<Sales>;
  customers$: Customer[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SalesService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.sales$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getSale(params.get('id'))
        )
    );

    const subscribe = this.sales$.subscribe(val => {
//      console.log(val.customerId);
      const customerIds = val.customerId.split(',');
      console.log(customerIds);

      // this.customers$.push(this.customerService.getCustomer(2));
      // this.customers$.push(this.customerService.getCustomer(3));
      // console.log(this.customers$);

      customerIds.forEach(id => {
        // tslint:disable-next-line:radix
        this.customers$.push(this.customerService.getCustomer(parseInt(id)));
      });
    });

  }

  gotoSales(sales: Sales) {
    const salesId = sales ? sales.id : null;
    this.router.navigate(['/sales', {id: salesId}]);
  }

  onSubmit(sales: Sales, valid: boolean) {
    if (valid) {
      // this.update.emit(car);
      console.log(  this.sales$ );
      console.log(  sales );
    }

  }
}
