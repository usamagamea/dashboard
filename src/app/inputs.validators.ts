import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class InputsValidators {
 
  static email(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return EMAIL_REGEXP.test(control.value) ? null : { email: true };
  }

  static password(control: AbstractControl): ValidationErrors | null {
    const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return PASSWORD_REGEXP.test(control.value) ? null : { password: true };
  }

  static EnglishOnly(control: AbstractControl): ValidationErrors | null {
    const ENGLISH_REGEXP = /^[a-zA-Z ]*$/;
    return ENGLISH_REGEXP.test(control.value) ? null : { EnglishOnly: true };
  }
 
  static phone(control: AbstractControl): ValidationErrors | null {
    const PHONE_REGEXP = /^[0-9]{10}$/;
    return PHONE_REGEXP.test(control.value) ? null : { phone: true };
  }

  static zip(control: AbstractControl): ValidationErrors | null {
    const ZIP_REGEXP = /^[0-9]{5}$/;
    return ZIP_REGEXP.test(control.value) ? null : { zip: true };
  }
}
