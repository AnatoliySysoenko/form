import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../user';
import { emailValidator, observableUrlValidator, rangeValidator } from '../custom-validators';
import {
  FORM_ERRORS,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  FORM_ROLES,
  FORM_SUCCESS,
  FORM_VALIDATION_MESSAGES
} from '../form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formPlaceholder = FORM_PLACEHOLDERS;
  formLabel = FORM_LABELS;
  formSuccess = FORM_SUCCESS;
  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;
  roles: string[] = FORM_ROLES;
  userForm!: FormGroup;
  user: User = new User(1, null, null, null, null, null, null);

  constructor(private fb: FormBuilder) { }

  get form(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.formBuild();
  }

  onSubmit(): void {
    console.log('Form submitted');
  }

  onValueChanges(): void {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach(field => {
      const control = form.get(field);
      this.formErrors[field] = '';

      if (control?.invalid && (control.dirty || control.touched)) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors as ValidationErrors).some(key => this.formErrors[field] = messages[key]);
      }
    });
  }

  private formBuild(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      site: [this.user.email, [Validators.required], [observableUrlValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      role: [this.user.age, [Validators.required]],
    });
    this.userForm.valueChanges.subscribe(() => this.onValueChanges());
  };
}
