import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import{SHOP_INVENTORY} from '../product_list';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-inventory-logs',
  templateUrl: './inventory-logs.component.html',
  styleUrls: ['./inventory-logs.component.css']
})
export class InventoryLogsComponent implements OnInit{


 PRODUCTS=SHOP_INVENTORY;
 selectedHero!: Inventory;
 
constructor(private productService: ProductService ){}
  ngOnInit(): void {
    this.getProducts();
  }
onSelect(product: Inventory): void {
  this.selectedHero = product;
}
getProducts():void{
  this.productService.getProducts().subscribe(x=>this.PRODUCTS=x);

}

}
