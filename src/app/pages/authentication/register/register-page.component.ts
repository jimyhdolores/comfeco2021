import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDataDialog } from '@team31/models/interfaces/data-dialog.interface';
import { IRegister } from '@team31/models/interfaces/register.interface';
import { ModalService } from '@team31/services/modal.service';
import { ProfileService } from '@team31/services/profile.service';
import { AuthService } from '../../../common/services/auth.service';
import { MessageService } from '../../../common/services/message.service';
import { VariableStatic } from '../../../common/static/variable-static';
import { CustomValidatorsService } from '../common/service/custom-validators.service';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
	private emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	data: IDataDialog = {
		titleModal: 'Vacio',
		contentModal: 'Lleno'
	};
	registerForm: FormGroup;
	hidePassword = true;
	hideConfirmPassword = true;
	declarations: IRegister = {};

	constructor(
		private modalService: ModalService,
		public dialog: MatDialog,
		private fb: FormBuilder,
		private customvalidators: CustomValidatorsService,
		private _authService: AuthService,
		private _messageService: MessageService,
		private router: Router,
		private profileService: ProfileService
	) {
		this.registerForm = this.fb.group(
			{
				userName: ['', [Validators.required, Validators.minLength(5)]],
				email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
				pass: ['', [Validators.required]],
				confirmPass: ['', [Validators.required]],
				termsCheck: ['', [Validators.requiredTrue]]
			},
			{
				validator: this.customvalidators.MatchPassword('pass', 'confirmPass')
			}
		);
		this.declarations = {
			button: 'Registrar',
			enlace: 'Volver al login'
		};
	}

	get registerFormControl(): FormGroup['controls'] {
		return this.registerForm.controls;
	}

	async newUser(): Promise<void> {
		try {
			const newUser = await this._authService.createUser(
				this.registerForm.controls['email'].value,
				this.registerForm.controls['pass'].value
			);
			if (newUser) {
				await this.profileService.createProfileData(this.registerForm.controls['userName'].value);
				this._messageService.openInfo('Usuario registrado exitosamente', 'end', 'top');
				void this.router.navigate(['/login']);
			}
		} catch (error) {
			this._messageService.openError(error, 'end', 'top');
		}
	}

	clickModalTerms(): void {
		this.modalService.open(VariableStatic.REGISTRATION_TERMS_CONDITIONS);
	}
}
