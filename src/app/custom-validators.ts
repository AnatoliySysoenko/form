import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const emailRegex = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
  const result = emailRegex.test(value);

  if (!result) return {emailValidator: {value}};
  return null;
}

export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (isNaN(value)) return {rangeValidator: {value}};
    if (value < minValue) return {minRange: {value}};
    if (value > maxValue) return {maxRange: {value}};

    return null;
  };
}

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const value = control.value;
  const urlRegx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const result = urlRegx.test(value);

  return of(result).pipe(map(res => {
    if (res) return null;
    return {urlNotAllowed: {value}};
  })).pipe(delay(2000));
}
