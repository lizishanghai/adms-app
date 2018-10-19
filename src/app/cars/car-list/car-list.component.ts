import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../car';
import { CarService } from './../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars$: Observable<Car[]>;
  selectedId: number;

  constructor(
    private service: CarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cars$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCars();
      })
    );
  }
}
