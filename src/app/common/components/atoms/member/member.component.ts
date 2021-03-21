import { Component, Input } from '@angular/core';
import { IGroupUserMember } from '@team31/models/interfaces/profile-module.interface';

@Component({
	selector: 'app-member',
	templateUrl: './member.component.html',
	styleUrls: ['./member.component.scss']
})
export class MemberComponent {
	@Input() itemMember: IGroupUserMember = <IGroupUserMember>{};
}
