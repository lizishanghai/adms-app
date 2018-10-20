import { Sales } from './sales';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const HTTP_URL = 'http://localhost:3000/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private http: HttpClient) {}

  getSales(): Observable<Sales[]> {
    return this.http.get<Sales[]>(HTTP_URL);
    // return of(SALES);
  }

  getSale(id: number | string) {
    return this.getSales().pipe(
      map((sales: Sales[]) => sales.find(sale => sale.id === +id))
    );
  }
}
