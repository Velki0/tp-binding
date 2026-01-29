import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../injproducts';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css'
})
export class ProductAdd implements OnInit {

  public angForm: FormGroup = new FormGroup({});
  public ProductName: FormControl = new FormControl({});
  public ProductDescription: FormControl = new FormControl({});
  public ProductPrice: FormControl = new FormControl({});

  constructor(private fb: FormBuilder, private lss: LocalStorageService) { }

  public ngOnInit(): void {

    this.ProductName = this.fb.control('', [Validators.required]);
    this.ProductDescription = this.fb.control('', [Validators.required]);
    this.ProductPrice = this.fb.control('', [Validators.required]);
    this.angForm = this.fb.group({
      ProductName: this.ProductName,
      ProductDescription: this.ProductDescription,
      ProductPrice: this.ProductPrice,
    });

  };

  protected onSubmit(): void {

    let nextId: number = this.lss.length() + 1;
    const newProduct = {
      name: this.ProductName.value,
      description: this.ProductDescription.value,
      price: this.ProductPrice.value,
    };
    this.lss.setItem(nextId.toString(), newProduct);
    console.log('Product added:', newProduct);
    this.angForm.reset();

  };

}
