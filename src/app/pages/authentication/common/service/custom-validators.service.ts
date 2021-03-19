import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class CustomValidatorsService {
	patternValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: boolean } | null => {
			if (!control.value) {
				return null;
			}
			const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
			const valid = regex.test(control.value);
			return valid ? null : { invalidPassword: true };
		};
	}

	MatchPassword(password: string, confirmPassword: string) {
		return (formGroup: FormGroup): void => {
			const passwordControl = formGroup.controls[password];
			const confirmPasswordControl = formGroup.controls[confirmPassword];

			if (!passwordControl || !confirmPasswordControl) {
				return;
			}

			if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
				return;
			}

			if (passwordControl.value !== confirmPasswordControl.value) {
				confirmPasswordControl.setErrors({ passwordMismatch: true });
			} else {
				confirmPasswordControl.setErrors(null);
			}
		};
	}
}
