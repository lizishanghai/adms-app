import { SALES } from './mock-sales';
import { Sales } from './sales';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor() {}

  getSales(): Observable<Sales[]> {
    return of(SALES);
  }

  getSale(id: number | string) {
    return this.getSales().pipe(
      map((sales: Sales[]) => sales.find(sale => sale.id === +id))
    );
  }
}
