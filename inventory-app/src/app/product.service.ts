import { Inventory } from './inventory';
import{SHOP_INVENTORY} from './product_list';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';  // URL to web api
  PRODUCTS=SHOP_INVENTORY;
  private idCounter: number = 0;
  constructor( ) {
    // Calculate the maximum existing ID
    const maxId = this.PRODUCTS.reduce((max, product) => (product.id > max ? product.id : max), 0);
    // Set the idCounter to the maximum existing ID + 1
    this.idCounter = maxId + 1;
   }

 /* getProducts(): Observable<Inventory[]> {
    return of(SHOP_INVENTORY);
  }*/
  /** GET heroes from the server */

  getProducts (): Observable<Inventory[]> {
   return of(SHOP_INVENTORY);
  }
  addProduct(product: Inventory): void {
    product.id = this.idCounter++;
    this.PRODUCTS.push(product);
  }
  /** POST: add a new hero to the server */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
