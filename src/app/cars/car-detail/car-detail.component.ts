import { switchMap } from 'rxjs/operators';
import { CarService } from './../car.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car$: Observable<Car>;
  // @Output() update: EventEmitter<Car> = new EventEmitter<Car>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarService
  ) { }

  ngOnInit() {
    this.car$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        // tslint:disable-next-line:radix
        this.service.getCar(parseInt(params.get('id'))))
    );
  }

  gotoCars(car: Car) {
    const carId = car ? car.id : null;
    this.router.navigate(['/cars', {id: carId}]);
  }

  onSubmit(car: Car, valid: boolean) {
    if (valid) {
      // this.update.emit(car);
      console.log(  this.car$ );
      console.log(  car );
    }

  }
}
