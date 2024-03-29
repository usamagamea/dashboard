import { AbstractControl, ValidationErrors } from "@angular/forms";

export class InputsValidators {
 
  static email(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return EMAIL_REGEXP.test(control.value) ? null : { email: true };
  }

  static password(control: AbstractControl): ValidationErrors | null {
    const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return PASSWORD_REGEXP.test(control.value) ? null : { password: true };
  }

  static phone(control: AbstractControl): ValidationErrors | null {
    const PHONE_REGEXP = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    return PHONE_REGEXP.test(control.value) ? null : { phone: true };
  }

 

  static EnglishOnly(control: AbstractControl): ValidationErrors | null {
    const ENGLISH_REGEXP = /^[a-zA-Z ]*$/;
    return ENGLISH_REGEXP.test(control.value) ? null : { EnglishOnly: true };
  }
  
}
