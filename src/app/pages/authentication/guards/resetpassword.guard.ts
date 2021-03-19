import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../common/services/auth.service';

@Injectable()
export class ResetpasswordGuard implements CanActivate {
	mode = '';
	actionCode = '';
	actionCodeChecked = false;
	constructor(private router: Router, private auth: AuthService) {}

	async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
		try {
			if (environment.production) return true;
			if (!route.queryParams) return false;
			if (route.queryParams['mode'] === 'resetPassword') {
				await this.auth.verifyPasswordresetCode(route.queryParams['oobCode']);
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.error('Error: ', error);
			return false;
		}
	}
}
