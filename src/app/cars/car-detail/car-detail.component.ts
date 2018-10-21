import { switchMap } from 'rxjs/operators';
import { CarService } from './../car.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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
  alerts: string;
  // @Output() update: EventEmitter<Car> = new EventEmitter<Car>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarService
  ) { }

  ngOnInit() {
    this.car$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCar(+params.get('id')))
    );
  }

  onSubmit(car: Car, valid: boolean) {
    if (valid) {
      this.service.putCar(car).subscribe(obj => {
        this.alerts = 'Save succeed';
      },
      err => {
        this.alerts = 'Save Failed';
      });
    }
  }
}
