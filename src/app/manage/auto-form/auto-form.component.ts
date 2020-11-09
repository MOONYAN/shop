import { NewedAuto } from './../model/newed-auto.vm';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent implements OnInit {

  autoForm: FormGroup;

  @Output() $newedAuto = new EventEmitter<NewedAuto>();

  readonly accOptions = ['full', 'half', 'none'];

  readonly absOptions = [true, false];

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.autoForm = this.builder.group({
      name: '',
      photo: '',
      acc: 'full',
      abs: true
    });
  }

  onSubmit(value) {
    if (this.autoForm.valid) {

      const newedAuto = new NewedAuto();

      newedAuto.name = value.name;
      newedAuto.photo = value.photo;
      newedAuto.acc = value.acc;
      newedAuto.abs = value.abs;

      this.$newedAuto.emit(newedAuto);
      this.autoForm.reset();
    }
  }
}
