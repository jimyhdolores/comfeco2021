import { Component, OnInit } from '@angular/core';
import { TEAM_LEADER_ITEMS } from '@team31/models/constants/team-leader.const';
import { ITeamLeaderItem } from '@team31/models/interfaces/team-leader-item.interface';

@Component({
	selector: 'app-creators-page',
	templateUrl: './creators-page.component.html',
	styleUrls: ['./creators-page.component.scss']
})
export class CreatorsPageComponent implements OnInit {
	listSkeleton = [1, 2, 3];
	listCreators: ITeamLeaderItem[] = [];

	ngOnInit(): void {
		this.listCreators = TEAM_LEADER_ITEMS;
	}
}
