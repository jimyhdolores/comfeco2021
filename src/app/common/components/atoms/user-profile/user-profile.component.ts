import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@team31/services/auth.service';
import { ModalService } from '@team31/services/modal.service';
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
		private modalService: ModalService
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
		void this.route.navigateByUrl(PathProject.LOGIN);
	}
	showNotification(): void {
		this.modalService.open({
			titleModal: 'Notificaciones',
			contentModal: 'No tienes notificaciones'
		});
	}
}
