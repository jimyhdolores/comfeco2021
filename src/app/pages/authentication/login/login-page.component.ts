import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@team31/services/auth.service';
import { HeaderService } from '@team31/services/header.service';
import { MessageService } from '@team31/services/message.service';
import { ProfileService } from '@team31/services/profile.service';
import { UserdataService } from '@team31/services/userdata.service';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
	email = 'kevin@comfeco.com';
	password = '123456';
	hidePassword = true;
	dataSubscription: Subscription | undefined;
	isLoading = false;
	constructor(
		private authFirebaseService: AuthService,
		private _messageService: MessageService,
		private router: Router,
		private userDataService: UserdataService,
		private headerService: HeaderService,
		private profileService: ProfileService
	) {}

	ngOnDestroy(): void {
		this.dataSubscription?.unsubscribe();
	}

	async login(): Promise<void> {
		try {
			this.isLoading = true;
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

					void this.router.navigateByUrl('/principal');
					this.headerService.showMenu(true);
				}
			}
		} catch (error) {
			this.isLoading = false;
			this._messageService.openError(error, 'end', 'top');
			console.error('Error cl:', error);
		}
	}
}
