import { Component, Input } from '@angular/core';
import { IMember } from '../../../models/interfaces/member.interface';

@Component({
	selector: 'app-member',
	templateUrl: './member.component.html',
	styleUrls: ['./member.component.scss']
})
export class MemberComponent {
	@Input() itemMember: IMember = <IMember>{};
}
