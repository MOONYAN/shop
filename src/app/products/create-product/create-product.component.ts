import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.builder.group({
      name: '',
      price: 0
    });
  }

  onSubmit(productData) {
    this.createForm.reset();
    this.service.createProduct(productData as Product).subscribe(
      _ => this.redirect()
    );
  }

  private redirect(){
    this.router.navigateByUrl('/products');
  }

}
