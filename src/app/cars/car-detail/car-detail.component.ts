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
  car$_fb: Observable<Car>;
  // @Output() update: EventEmitter<Car> = new EventEmitter<Car>();

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.carService.form.controls;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) { }


  ngOnInit() {
    this.carService.getCars();
  }

  onSubmit() {
    this.submitted = true;
    if (this.carService.form.valid) {
      if (this.carService.form.get('key').value == null) {
        this.carService.insertCar(this.carService.form.value);
      } else {
        this.carService.updateCar(this.carService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.carService.form.reset();
    }
  }
}
