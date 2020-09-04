import { ProductDto } from '../interfaces/product-dto.interface';

export class MartItem {
  id: number;
  name: string;
  price: number;
  isSelected: boolean;

  constructor(product: ProductDto) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.isSelected = false;
  }
}
