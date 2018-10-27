import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../car';
import { CarService } from './../car.service';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars$: Observable<Car[]>;
  cars$_fb: Observable<Car[]>;
  selectedId: number;

  carArray = [];
  showDeleteMessage: boolean;
  searchText = '';

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.carService.getCars().subscribe(
      list => {
        this.carArray = list.map(item => {
          return {
            key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  onDelete(key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.carService.deleteCar(key);
      this.showDeleteMessage = true;
      setTimeout(() => this.showDeleteMessage = false, 3000);
    }
  }

  filterCondition(car) {
    return car.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }
}
