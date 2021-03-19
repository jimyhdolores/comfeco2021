import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { HeaderService } from '@team31/services/header.service';
import { MessageService } from '@team31/services/message.service';
import { UserdataService } from '@team31/services/userdata.service';
import { PathProject } from '@team31/static/path-project';
import { switchMap, take } from 'rxjs/internal/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private auth: AngularFireAuth,
		private _messageService: MessageService,
		private userDataService: UserdataService,
		private headerService: HeaderService
	) {}

	async canActivate(): Promise<boolean> {
		const response = await this.auth.authState
			.pipe(
				take(1),
				// eslint-disable-next-line @typescript-eslint/require-await
				switchMap(async (authState) => {
					if (authState) {
						if (
							!this.userDataService.getUserProfileData ||
							Object.keys(this.userDataService.getUserProfileData).length == 0
						) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							this.userDataService.setUserProfileData = JSON.parse(
								sessionStorage.getItem('currentUser') || '{}'
							);
							sessionStorage.removeItem('currentUser');
						}
						return true;
					} else {
						void this.router.navigate([PathProject.LOGIN]);
						this._messageService.openError('Primero inicia sesión	', 'end', 'top');
						return false;
					}
				})
			)
			.toPromise();

		const showHeader = sessionStorage.getItem('showHeader');
		if (showHeader && showHeader.includes(PathProject.PRINCIPAL)) {
			this.headerService.showMenu(true);
			sessionStorage.removeItem('showHeader');
		}

		this.detechRefreshPage();

		return response;
	}

	private detechRefreshPage() {
		window.onbeforeunload = () => {
			sessionStorage.setItem(
				'currentUser',
				JSON.stringify(this.userDataService.getUserProfileData)
			);
			sessionStorage.setItem('showHeader', this.router.url);
		};
	}
}
