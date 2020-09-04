import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DtoForCreateProduct } from 'src/app/interfaces/dto-for-create-product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dialog-new-product',
  templateUrl: './dialog-new-product.component.html',
  styleUrls: ['./dialog-new-product.component.css']
})
export class DialogNewProductComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<DialogNewProductComponent>) { }

  ngOnInit(): void {
    this.createForm = this.builder.group({
      name: '',
      price: 0
    });
  }

  onSubmit(dto: DtoForCreateProduct) {
    if (this.createForm.valid) {
      this.productService.createProduct(dto);
      this.dialogRef.close();
    }
  }

}
