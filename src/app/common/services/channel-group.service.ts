import { Injectable } from '@angular/core';
import { IGroupUser } from '@team31/models/interfaces/profile-module.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ChannelGroupService {
	private subject = new BehaviorSubject<IGroupUser>(<IGroupUser>{});
	channel$ = this.subject.asObservable();

	updateGroupCard(groupCard: IGroupUser): void {
		this.subject.next(groupCard);
	}
}
