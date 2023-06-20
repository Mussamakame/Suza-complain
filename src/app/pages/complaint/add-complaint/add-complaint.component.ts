import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {

  // declare a form group
  stepOne: FormGroup | undefined;
  completed = false;

  constructor(builder: FormBuilder) {
    this.stepOne = builder.group(
      {
        isNotEmpty: [
          '',
          Validators.compose(
            [Validators.required]
          )
        ]
      }
    );
  }

}
