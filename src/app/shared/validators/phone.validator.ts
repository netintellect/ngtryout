import {AbstractControl, ValidatorFn} from "@angular/forms";

export function phoneNumberValidator(isoCountryCode?: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {

    if (control.value == null ||
        String(control.value).length === 0) {
      return null;
    }
    let phoneRegEx: RegExp = null;
    switch (isoCountryCode)
    {
      case 'be':
        // provide regex for belgium
      case 'us':
      default:
        phoneRegEx = new RegExp("^(1[\\\\-\\\\+]{0,3}|\\\\+1[ -\\\\+]{0,3}|\\\\+1|\\\\+)?((\\\\(\\\\+?1-[2-9][0-9]{1,2}\\\\))|(\\\\(\\\\+?[2-8][0-9][0-9]\\\\))|(\\\\(\\\\+?[1-9][0-9]\\\\))|(\\\\(\\\\+?[17]\\\\))|(\\\\([2-9][2-9]\\\\))|([ \\\\-\\\\.]{0,3}[0-9]{2,4}))?([ \\\\-\\\\.][0-9])?([ \\\\-\\\\.]{0,3}[0-9]{2,4}){2,3}$");
    }

    const isValid = phoneRegEx.test(control.value);
    return !isValid ? {"phoneNumber": {value: control.value}} : null;
  };
}
