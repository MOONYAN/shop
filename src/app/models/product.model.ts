import { ProductDto } from '../interfaces/product-dto.interface';

export class Product {
  id: number;
  name: string;
  price: number;

  constructor(obj?: ProductDto) {
    this.id = obj.id;
    this.name = obj.name;
    this.price = obj.price;
  }
}
