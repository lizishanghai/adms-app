import { Sales } from './../sales';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from '../sales.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales$: Observable<Sales[]>;
  selectedId: number;

  constructor(
    private service: SalesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sales$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getSales();
      })
    );
  }

}
