import { ReqCreateAutoDto } from './../dto/req-create-auto-dto';
export class NewedAuto {

  name: string;

  photo: string;

  acc: string;

  abs: boolean;

  toReqDto(): ReqCreateAutoDto {
    return {
      name: this.name,
      photo: this.photo,
      acc: this.acc,
      abs: this.abs
    } as ReqCreateAutoDto;
  }
}
