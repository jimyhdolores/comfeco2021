import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpasswordGuard } from './guards/resetpassword.guard';
import { LoginPageComponent } from './login/login-page.component';
import { RecoveryPasswordPageComponent } from './recovery-password/recovery-password-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { ResetPasswordPageComponent } from './reset-password/reset-password-page.component';

const routes: Routes = [
	{ path: '', component: LoginPageComponent },
	{ path: 'register', component: RegisterPageComponent },
	{ path: 'recovery', component: RecoveryPasswordPageComponent },
	{
		path: 'resetPassword',
		component: ResetPasswordPageComponent,
		canActivate: [ResetpasswordGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
