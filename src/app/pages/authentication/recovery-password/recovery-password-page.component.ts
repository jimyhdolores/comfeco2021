import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '@team31/services/message.service';

@Component({
	selector: 'app-recovery-password-page',
	templateUrl: './recovery-password-page.component.html',
	styleUrls: ['./recovery-password-page.component.scss']
})
export class RecoveryPasswordPageComponent {
	private emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	recoveryForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private _authService: AuthService,
		private router: Router,
		private _messageService: MessageService
	) {
		this.recoveryForm = this.fb.group({
			email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
		});
	}

	get recoveryFormControl(): FormGroup['controls'] {
		return this.recoveryForm.controls;
	}

	async sendPasswordResetEmail(): Promise<void> {
		try {
			await this._authService.sendPasswordResetEmail(this.recoveryForm.controls['email'].value);
			this._messageService.openInfo('Correo de recuperación enviado', 'end', 'top');
			void this.router.navigate(['/login']);
		} catch (error) {
			this._messageService.openError('Correo de recuperación enviado', 'end', 'top');
		}
	}
}
