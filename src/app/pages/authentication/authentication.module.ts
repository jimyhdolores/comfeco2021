import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { AuthService } from '@team31/services/auth.service';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { CustomValidatorsService } from './common/service/custom-validators.service';
import { ResetpasswordGuard } from './guards/resetpassword.guard';
import { LoginPageComponent } from './login/login-page.component';
import { RecoveryPasswordPageComponent } from './recovery-password/recovery-password-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { ResetPasswordPageComponent } from './reset-password/reset-password-page.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		LoginPageComponent,
		RegisterPageComponent,
		RecoveryPasswordPageComponent,
		ResetPasswordPageComponent
	],
	imports: [
		CommonModule,
		AtomModule,
		FormsModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		ReactiveFormsModule,
		MatSlideToggleModule,
		AuthenticationRoutingModule
	],
	providers: [AuthService, CustomValidatorsService, ResetpasswordGuard]
})
export class AuthenticationModule {}
