import { ReqSignupDto } from './../dto/req-signup-dto';
export class SignupMOdel {

  email: string;

  password: string;

  toReqDto(): ReqSignupDto {
    return {
      email: this.email,
      password: this.password
    } as ReqSignupDto;
  }
}
