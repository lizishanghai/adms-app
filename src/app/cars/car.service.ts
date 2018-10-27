import { Car } from './car';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carList: AngularFireList<any>;
  cars: Observable<any[]>;
  currentCar: Observable<any>;

  form = new FormGroup({
    key: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('')
  });

  constructor(
    private firebase: AngularFireDatabase
    ) { }

  getCars() {
    this.carList = this.firebase.list('cars');
    return this.carList.snapshotChanges();
  }

  insertCar(car) {
    this.carList.push({
      name: car.name,
      email: car.email,
      mobile: car.mobile
    });
  }

  populateForm(car) {
    this.form.setValue(car);
  }

  updateCar(car) {
    this.carList.update(car.key,
    {
      name: car.name,
      email: car.email,
      mobile: car.mobile
    });
  }

  deleteCar(key) {
    this.carList.remove(key);
  }

  getCar(id: number | string) {
    return this.getCars().pipe(
      map((cars: Car[]) => cars.find(car => car.key === id))
    );
   }



   putCar(car: Car) {
      // return this.http.put(HTTP_URL + '/' + car.key, car);
   }
}
