import { Component, Input } from '@angular/core';
import { ITeamLeaderItem } from '@team31/models/interfaces/team-leader-item.interface';

@Component({
	selector: 'app-team-leader',
	templateUrl: './team-leader.component.html',
	styleUrls: ['./team-leader.component.scss']
})
export class TeamLeaderComponent {
	@Input() teamLeaders: ITeamLeaderItem = <ITeamLeaderItem>{};
}
