import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IErroFirebase } from '@team31/models/interfaces/register.interface';
import { AuthService } from '@team31/services/auth.service';
import { HeaderService } from '@team31/services/header.service';
import { MessageService } from '@team31/services/message.service';
import { ProfileService } from '@team31/services/profile.service';
import { SplashScreenService } from '@team31/services/splash-screen.service';
import { UserdataService } from '@team31/services/userdata.service';
@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	email = '';
	password = '';
	hidePassword = true;
	isLoading = false;
	constructor(
		private authFirebaseService: AuthService,
		private _messageService: MessageService,
		private router: Router,
		private userDataService: UserdataService,
		private headerService: HeaderService,
		private profileService: ProfileService,
		private splashScreenService: SplashScreenService
	) {}
	ngOnInit(): void {
		this.authFirebaseService.logout();
	}

	async login(): Promise<void> {
		try {
			this.isLoading = true;
			this.splashScreenService.showSplashScreen(true);
			const singIn = await this.authFirebaseService.singInWithEmailAndPassword(
				this.email,
				this.password
			);
			if (singIn && singIn.user) {
				const userDataService = await this.profileService.loadProfileData(singIn.user.uid);

				if (userDataService) {
					userDataService.profile.uid = singIn.user.uid;
					userDataService.profile.email = this.email;

					this.userDataService.setUserProfileData = userDataService;
					const showPrincipal = await this.router.navigateByUrl('/principal');
					if (showPrincipal) {
						this.headerService.showMenu(true);
						this.splashScreenService.showSplashScreen(false);
					}
				}
			} else {
				this._messageService.openError('Aun no te has registrado, crea una cuenta.', 'end', 'top');
			}
		} catch (error) {
			const erroFirebase = error as IErroFirebase;
			let messageError = 'Ups!, ocurrio un erro, intenta nuevamente.';

			if (erroFirebase && erroFirebase.code === 'auth/invalid-email') {
				messageError = 'Ups! parece que aún no te registras, crea tu cuenta YA!';
			}
			this._messageService.openError(messageError, 'end', 'top');

			this.isLoading = false;
			this.splashScreenService.showSplashScreen(false);
			console.error('Error cl:', error);
		}
	}
}
