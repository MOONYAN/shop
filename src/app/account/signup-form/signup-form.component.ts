import { SignupModel } from './../model/signup-model.vm';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;

  @Output() $signupModel = new EventEmitter<SignupModel>();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.builder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(value) {
    if (this.signupForm.valid) {
      const signupModel = new SignupModel();
      signupModel.email = value.email;
      signupModel.password = value.password;
      this.$signupModel.emit(signupModel);
      this.signupForm.reset();
    }
  }

}
