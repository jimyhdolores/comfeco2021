import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../common/services/message.service';
import { CustomValidatorsService } from '../common/service/custom-validators.service';

@Component({
	selector: 'app-reset-password-page',
	templateUrl: './reset-password-page.component.html',
	styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent implements OnInit, OnDestroy {
	mode = '';
	actionCode = '';
	actionCodeChecked = false;
	newPassword = '';
	confirmPassword = '';
	resetPasswordForm: FormGroup;
	hidePassword = true;
	hideConfirmPassword = true;
	subscription!: Subscription;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private auth: AngularFireAuth,
		private fb: FormBuilder,
		private customvalidators: CustomValidatorsService,
		private _messageService: MessageService
	) {
		this.resetPasswordForm = this.fb.group(
			{
				pass: ['', [Validators.required]],
				confirmPass: ['', [Validators.required]]
			},
			{
				validator: this.customvalidators.MatchPassword('pass', 'confirmPass')
			}
		);
	}

	ngOnInit(): void {
		this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.mode = String(params['mode']);
			this.actionCode = String(params['oobCode']);

			if (params['mode'] === 'resetPassword') {
				// Verificar si el código de reseteo es válido
				this.auth
					.verifyPasswordResetCode(this.actionCode)
					.then(() => {
						this.actionCodeChecked = true;
					})
					.catch((e) => {
						// código inválido o expirado.
						alert(e);
					});
			}
		});
	}

	resetPassword(): void {
		this.auth
			.confirmPasswordReset(this.actionCode, this.resetPasswordForm.controls['pass'].value)
			.then(() => {
				this._messageService.openInfo(
					'Su contraseña ha sido actualizada, puede iniciar sesión',
					'end',
					'top'
				);
				void this.router.navigate(['/login']);
			})
			.catch((e) => {
				alert(e);
			});
	}

	get resetPasswordFormControl(): FormGroup['controls'] {
		return this.resetPasswordForm.controls;
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
