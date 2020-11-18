import { ResAutoDto } from './../dto/res-auto-dto';
export class PocketAuto {

  autoId: number;

  name: string;

  constructor(dto: ResAutoDto) {

    this.autoId = dto.id;
    this.name = dto.name;
  }
}
