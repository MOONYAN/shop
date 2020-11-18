import { ResAutoDto } from './../dto/res-auto-dto';
export class Auto {

  id: number;

  name: string;

  photo: string;

  acc: string;

  abs: boolean;

  constructor(dto: ResAutoDto) {

    this.id = dto.id;
    this.name = dto.name;
    this.photo = dto.photo;
    this.acc = dto.acc;
    this.abs = dto.abs;
  }
}
