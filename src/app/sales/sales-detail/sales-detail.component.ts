import { CustomerService } from '../../customers/customer.service';
import { Customer } from '../../customers/customer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { CarService } from '../../cars/car.service';
import { Car } from 'src/app/cars/car';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css']
})
export class SalesDetailComponent implements OnInit {
  sales$: Observable<Sales>;
  car$: Car;
  customers$: Customer[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salesService: SalesService,
    private carService: CarService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {

    this.sales$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.salesService.getSale(params.get('id'))
      )
    );

    this.sales$.subscribe(val => {
      const customerIds = val.customerId.split(',');
      customerIds.forEach(id => {
        this.customerService.getCustomer(+id).subscribe(cust => {
          this.customers$.push(cust);
        });
      });
    });

    this.sales$.subscribe(val => {
        this.carService.getCar(val.carId).subscribe(car => {
        //  this.car$ = car;
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
