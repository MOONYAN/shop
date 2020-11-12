import { LoginModel } from './../model/login-model.vm';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  @Output() $loginModel = new EventEmitter<LoginModel>();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(value) {
    if (this.loginForm.valid) {
      const loginModel = new LoginModel();
      loginModel.email = value.email;
      loginModel.password = value.password;
      this.$loginModel.emit(loginModel);
      this.loginForm.reset();
    }
  }


}
