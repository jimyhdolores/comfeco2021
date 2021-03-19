import { Component, OnInit } from '@angular/core';
import { Sponsor } from '@team31/models/carousel';
import { SPONSOR_ITEMS, TEAM_LEADER_ITEMS } from '@team31/models/constants/team-leader.const';
import { ITeamLeaderItem } from '@team31/models/interfaces/team-leader-item.interface';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	sourceTeamLeader: Array<ITeamLeaderItem> = [];
	sourceSponsor: Array<Sponsor> = [];

	ngOnInit(): void {
		this.sourceTeamLeader = TEAM_LEADER_ITEMS;
		this.sourceSponsor = SPONSOR_ITEMS;
	}
}
