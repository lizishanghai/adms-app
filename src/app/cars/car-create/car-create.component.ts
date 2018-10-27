import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(car: Car, valid: boolean) {
  //  console.log(this.ngform);
  }

}
