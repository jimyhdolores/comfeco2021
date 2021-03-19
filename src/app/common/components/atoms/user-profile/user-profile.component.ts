import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@team31/services/auth.service';
import { HeaderService } from '@team31/services/header.service';
import { UserdataService } from '@team31/services/userdata.service';
import { PathProject } from '@team31/static/path-project';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	constructor(
		private route: Router,
		private auth: AuthService,
		private userdataService: UserdataService,
		private headerService: HeaderService
	) {}

	nameUser = 'Actualiza tu Nick';

	ngOnInit(): void {
		const nick = this.userdataService.getUserProfileData.profile.nick;
		if (nick) {
			this.nameUser = nick;
		}
	}
	clickGoProfile(): void {
		void this.route.navigateByUrl(PathProject.PROFILE);
	}

	clickCloseSession(): void {
		this.auth.logout();
		sessionStorage.clear();
		this.headerService.showMenu(false);
		void this.route.navigateByUrl(PathProject.LOGIN);
	}
}
