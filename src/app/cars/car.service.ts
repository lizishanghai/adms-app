import { Car } from './car';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const HTTP_URL = 'http://localhost:3000/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(HTTP_URL);
//    return of(CARS);
  }

  getCar(id: number | string) {
    return this.getCars().pipe(
      map((cars: Car[]) => cars.find(car => car.id === +id))
    );
   }
}
