import { ReqLoginDto } from '../dto/req-login-dto';

export class LoginModel {

  email: string;

  password: string;

  toReqDto(): ReqLoginDto {
    return {
      email: this.email,
      password: this.password
    } as ReqLoginDto;
  }
}
