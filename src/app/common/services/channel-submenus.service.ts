import { Injectable } from '@angular/core';
import { TypeNameSubMenu } from '@team31/models/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChannelProfileService {
	private subject = new BehaviorSubject<TypeNameSubMenu>('Mi Perfil');
	channel$ = this.subject.asObservable();

	showComponent(showMenu: TypeNameSubMenu): void {
		this.subject.next(showMenu);
	}
}
