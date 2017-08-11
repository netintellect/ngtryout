import {Directive, Injectable} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {phoneNumberValidator} from "./phone.validator";

@Directive({
    selector: '[phone]',
    providers: [
      { provide: NG_VALIDATORS, useExisting: PhoneNumberValidator, multi: true }
    ]
  })

@Injectable()
export class PhoneNumberValidator implements Validator{
  private validator: ValidatorFn;

  validate(c: AbstractControl): ValidationErrors | any {
    return this.validator(c);
  }
  constructor() {
    this.validator = phoneNumberValidator();
  }
}
