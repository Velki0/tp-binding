import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../injproducts';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit implements OnInit {
  
  public angForm: FormGroup = new FormGroup({});
  public ProductName: FormControl = new FormControl({});
  public ProductDescription: FormControl = new FormControl({});
  public ProductPrice: FormControl = new FormControl({});
  private route = inject(ActivatedRoute);
  private id = this.route.snapshot.params['id'];

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

    const updatedProduct = {
      name: this.ProductName.value,
      description: this.ProductDescription.value,
      price: this.ProductPrice.value,
    };
    this.lss.setItem(this.id, updatedProduct);
    console.log('Product updated:', updatedProduct);
    this.angForm.reset();

  };

}
