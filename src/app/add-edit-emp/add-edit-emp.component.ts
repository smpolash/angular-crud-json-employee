import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-edit-emp.component.html',
  styleUrl: './add-edit-emp.component.css',
})

export class AddEditEmpComponent {
  // selected = 'option2';
  gender: string[] = ['None', 'Male', 'Female', 'Others'];
  educations: string[] = [
    'Metric',
    'Intermediate',
    'Diploma',
    'Graduate',
    'Masters',
  ];
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      exp: '',
      package: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
