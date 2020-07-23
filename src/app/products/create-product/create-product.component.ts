import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { MatDialogRef } from '@angular/material/dialog';

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
    private dialogRef: MatDialogRef<CreateProductComponent>) { }

  ngOnInit(): void {
    this.createForm = this.builder.group({
      name: '',
      price: 0
    });
  }

  onSubmit(productData) {
    if (this.createForm.valid) {
      this.service.createProduct(productData as Product).subscribe(
        product => this.dialogRef.close(product)
      );
    }
  }
}
