import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryLogsComponent } from './inventory-logs/inventory-logs.component';
import { AddProductsComponent } from './add-products/add-products.component';
const routes: Routes = [{ path: 'products', component: InventoryLogsComponent },
{path:"add products",component:AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
