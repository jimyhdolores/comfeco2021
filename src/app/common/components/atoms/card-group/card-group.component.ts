import { Component, Input } from '@angular/core';
import { IGroups } from '@team31/models/interfaces/profile-module.interface';

@Component({
	selector: 'app-card-group',
	templateUrl: './card-group.component.html',
	styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
	@Input() group: IGroups = <IGroups>{};
}
