import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AREA_ITEMS } from '@team31/models/constants/team-leader.const';
import { ICardProfile } from '@team31/models/interfaces/user-profile.interface';
import { UserdataService } from '@team31/services/userdata.service';
import { IUserInsignia } from './../../../../../../common/models/interfaces/user-profile.interface';

@Component({
	selector: 'app-submodule-profile',
	templateUrl: './submodule-profile.component.html',
	styleUrls: ['./submodule-profile.component.scss']
})
export class SubmoduleProfileComponent implements OnInit {
	constructor(
		private userdataService: UserdataService,
		private breackPointer: BreakpointObserver
	) {}
	showExpand = false;
	panelOpenState = false;
	dataProfile: ICardProfile = <ICardProfile>{};
	listActivities: string[] = [];
	insignia: IUserInsignia = <IUserInsignia>{};
	ngOnInit(): void {
		this.loadDataCardProfile();
		this.loadActivities();
		this.loadInsignia();
		this.breackPointer.observe('(max-width: 905px)').subscribe((data) => {
			this.showExpand = data.matches;
		});
	}

	loadActivities(): void {
		const dataService = this.userdataService.getUserProfileData;

		if (dataService && dataService.activities) {
			this.listActivities = dataService.activities;
		}
	}

	loadInsignia(): void {
		const insignias = this.userdataService.getUserProfileData.insignia;
		if (insignias) {
			this.insignia.name = insignias[0].name;
			this.insignia.urlImage = insignias[0].urlImage;
		}
	}

	loadDataCardProfile(): void {
		const dataService = this.userdataService.getUserProfileData;

		if (dataService) {
			this.dataProfile.area =
				AREA_ITEMS.find((area) => area.id === dataService.profile.idArea)?.value ?? '';
			this.dataProfile.biography = dataService.profile.biography ?? 'Actualiza tu Biografía';
			this.dataProfile.name = dataService.profile.nick ?? 'Actualiza tu Nick';
			if (dataService.profile.redSocial) {
				this.dataProfile.redSocial = dataService.profile.redSocial;
			}
		}
	}
}
