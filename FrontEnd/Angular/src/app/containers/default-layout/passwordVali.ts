import { AbstractControl } from '@angular/forms';
 
export class Passwordmatch {
    // Custom validator to check that two fields match.
    static matchPassword(ac: AbstractControl) {
        const pwd = ac.get('newPassword');
        const cnfpwd = ac.get('confirmNewPassword');
        if (pwd.value === cnfpwd.value) {
            return null;
        }
 
        ac.get('confirmNewPassword').setErrors({ mustMatch: true });
        return true;
    }
}