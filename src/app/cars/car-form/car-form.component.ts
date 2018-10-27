import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() car$_fb: Observable<Car>;
  constructor() { }

  ngOnInit() {
  }

}
