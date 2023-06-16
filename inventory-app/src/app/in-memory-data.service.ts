import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Inventory } from './inventory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Product1',price:500,quantity:10 },
      { id: 12, name: 'Product2' ,price:600,quantity:20},
      { id: 13, name: 'Product3',price:700,quantity:30 }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Inventory[]): number {
    return products.length > 0 ? Math.max(...products.map(hero => hero.id)) + 1 : 11;
  }
}