import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup = new FormGroup(
    {
      // Manual cost
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    }
  )

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    let myString = this.buildString();
    httpservice.(myString);
  }

  buildString(): string {
    let name = this.formGroup.value.name; 
    let age = this.formGroup.value.age;
    let description = this.formGroup.value.description;

    return "<CQQ36;fc=HELLO;jobno=0;sid=2;atime=1458140120;gmt=1458140120;class=chat;type=msg;webmuxip=10.51.12.47;webmuxport=35122;d.name=" + name + ";maddr=john.doe@domain.com;c.ourcustid=A123;d.shoesize=39;routecat=chat;>"
  }
}
