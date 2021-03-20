import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from '@team31/models/constants/team-leader.const';
import { IGroups } from '@team31/models/interfaces/profile-module.interface';
import { ProfileService } from '@team31/services/profile.service';

@Component({
	selector: 'app-groups',
	templateUrl: './groups.component.html',
	styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
	languagesList = LANGUAGES;
	languageFilter = '';
	textFilter = '';
	groupsData: IGroups[] = [];
	groupsDataBackup: IGroups[] = [];

	constructor(private profileService: ProfileService) {}

	ngOnInit(): void {
		this.profileService.getGroups().subscribe((groups: IGroups[]) => {
			this.groupsData = groups;
			this.groupsDataBackup = groups;
		});
	}

	filterGroups(): void {
		if (this.textFilter.length === 0) {
			this.groupsData = this.groupsDataBackup;
		} else {
			if (this.groupsData.length === 0) this.groupsData = this.groupsDataBackup;
			if (this.languageFilter.length > 0) {
				this.groupsData = this.groupsData.filter(
					(group: IGroups) =>
						group.nameTechnology === this.languageFilter &&
						group.nameGroup.toLowerCase().indexOf(this.textFilter.toLowerCase()) > -1
				);
			} else {
				this.groupsData = this.groupsData.filter(
					(group: IGroups) =>
						group.nameGroup.toLowerCase().indexOf(this.textFilter.toLowerCase()) > -1
				);
			}
		}
	}
}
