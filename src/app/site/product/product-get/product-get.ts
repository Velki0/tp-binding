import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../model/product';
import { LocalStorageService } from '../../../injproducts';

@Component({
  selector: 'app-product-get',
  imports: [RouterLink],
  templateUrl: './product-get.html',
  styleUrl: './product-get.css',
})
export class ProductGet implements OnInit {

  protected products: Product[] = [];

  constructor(private lss: LocalStorageService) { }

  public ngOnInit(): void {

    const keys = this.lss.getKeys();
    for (let key in keys) {
      const newProduct = this.lss.getItem<Product>(key);
      if (newProduct){
          this.products.push(newProduct);
      }
    }

  };

}
