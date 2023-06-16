import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { SHOP_INVENTORY } from '../product_list';
import { Inventory } from '../inventory';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productName!: string;
  productQuantity!: number;
  productPrice!: number;
  constructor(private productservice:ProductService){
    this.productName = '';
    this.productQuantity = 0;
    this.productPrice = 0;
  }
  addProduct(): void {
    const product: Inventory = {
      name: this.productName,
      quantity: this.productQuantity,
      price: this.productPrice,
      id: 0
    };
    this.productservice.addProduct(product);

// Reset the input fields after adding the product
this.productName = '';
this.productQuantity = 0;
this.productPrice = 0;
}

}
