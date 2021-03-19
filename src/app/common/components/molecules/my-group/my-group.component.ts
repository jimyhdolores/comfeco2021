import { Component } from '@angular/core';
import { IMember } from '../../../models/interfaces/member.interface';

@Component({
	selector: 'app-my-group',
	templateUrl: './my-group.component.html',
	styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent {
	memberItems: Array<IMember> = [
		{
			name: 'Pedro Navaja',
			experience: 'Novato',
			type: 'Integrante',
			photo: 'assets/images/sponsors/CodelyTV.jpg'
		}
	];
}
