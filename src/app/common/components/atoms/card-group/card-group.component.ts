import { Component, Input, OnInit } from '@angular/core';
import { IGroups, IGroupUser } from '@team31/models/interfaces/profile-module.interface';
import { ChannelGroupService } from '@team31/services/channel-group.service';
import { MessageService } from '@team31/services/message.service';
import { ProfileService } from '@team31/services/profile.service';
import { UserdataService } from '@team31/services/userdata.service';
import { Util } from '@team31/static/util';

@Component({
	selector: 'app-card-group',
	templateUrl: './card-group.component.html',
	styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {
	@Input() group: IGroups = <IGroups>{};
	disabled = false;
	constructor(
		private userdataService: UserdataService,
		private authService: ProfileService,
		private messageService: MessageService,
		private channelGroupData: ChannelGroupService
	) {}
	ngOnInit(): void {
		const dataUser = { ...this.userdataService.getUserProfileData };
		if (dataUser && dataUser.group) {
			this.disabled = dataUser.group.name == this.group.nameGroup;
		}
	}
	clickJoin(): void {
		const dataUser = { ...this.userdataService.getUserProfileData };
		const groupUser: IGroupUser = {
			name: this.group.nameGroup,
			urlLogo: this.group.urlLogo,
			members: this.group.members
		};
		const currentUserGroup = {
			name: this.userdataService.userProfileData.profile.nick || 'User',
			level: 'Novato'
		};
		groupUser.members.push(currentUserGroup);

		dataUser.group = groupUser;

		if (dataUser.activities && dataUser.activities.length > 0) {
			dataUser.activities.push(Util.getDescriptionActivity(this.group.nameGroup, 'grupo'));
		} else {
			dataUser.activities = [Util.getDescriptionActivity(this.group.nameGroup, 'grupo')];
		}

		try {
			this.authService.updateGroupsData(dataUser.profile.uid, dataUser.group);
			this.authService.updateActivitiesData(dataUser.profile.uid, dataUser.activities);

			this.userdataService.setUserProfileData = dataUser;
			this.channelGroupData.updateGroupCard(groupUser);
			this.disabled = true;
			this.messageService.openInfo('Gracias por unirte al grupo', 'end', 'top');
		} catch (error) {
			this.messageService.openError('Ups, ocurrio un error intenta nuevamente.', 'end', 'top');
			console.error('Error al agregar grupo al perfil de usuario', error);
		}
	}
}
