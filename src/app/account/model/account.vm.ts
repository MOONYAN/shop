export class Account {

  readonly isLogin: boolean;

  readonly email: string;

  readonly token: string;

  constructor(isLogin: boolean, emial: string, token: string) {
    this.isLogin = isLogin;
    this.email = emial;
    this.token = token;
  }
}
