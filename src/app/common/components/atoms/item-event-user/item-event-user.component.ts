import { Component, Input } from '@angular/core';
import { IEventUser } from '@team31/models/interfaces/profile-module.interface';

@Component({
	selector: 'app-item-event-user',
	templateUrl: './item-event-user.component.html',
	styleUrls: ['./item-event-user.component.scss']
})
export class ItemEventUserComponent {
	@Input() item: IEventUser = <IEventUser>{};
}
