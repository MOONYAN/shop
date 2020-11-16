import { ResAutoDto } from './../../manage/dto/res-auto-dto';
export class Product {

  autoId: number;

  name: string;

  photo: string;

  constructor(dto: ResAutoDto) {

    this.autoId = dto.id;
    this.name = dto.name;
    this.photo = dto.photo;
  }
}
