import { Component, OnInit, Input } from '@angular/core';
import { Inventory } from '../inventory';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @Input()
  inventory!: Inventory;
  ngOnInit() {
   
  }
  constructor() { }

}
