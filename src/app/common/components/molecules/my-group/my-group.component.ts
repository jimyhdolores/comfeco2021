import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGroupUser } from '@team31/models/interfaces/profile-module.interface';
import { ChannelGroupService } from '@team31/services/channel-group.service';
import { UserdataService } from '@team31/services/userdata.service';
import { Subscription } from 'rxjs';
import { IMember } from '../../../models/interfaces/member.interface';

@Component({
	selector: 'app-my-group',
	templateUrl: './my-group.component.html',
	styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent implements OnInit, OnDestroy {
	public userGroupData: IGroupUser = <IGroupUser>{};
	memberItems: Array<IMember> = [];
	subscription!: Subscription;
	constructor(
		public userdataService: UserdataService,
		private channelGroupService: ChannelGroupService
	) {}

	ngOnInit(): void {
		console.log(this.userdataService.getUserProfileData.group);
		if (this.userdataService.getUserProfileData.group) {
			this.userGroupData = this.userdataService.getUserProfileData.group;
			console.log(this.userGroupData);
		}

		this.subscription = this.channelGroupService.channel$.subscribe((groupData) => {
			console.log(groupData);
			if (Object.keys(groupData).length > 0) {
				this.userGroupData = groupData;
			}
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
