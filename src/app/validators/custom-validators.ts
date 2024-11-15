import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxYearValidator(maxYearsAgo: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const currentYear = new Date().getFullYear();
      const inputYear = Number(control.value);

      if (inputYear < currentYear - maxYearsAgo) {
        return { 'maxYear': { value: control.value } };
      }
    }
    return null;
  };
}