import { Component, Input } from '@angular/core';
import { IEvent, IEventUser } from '@team31/models/interfaces/profile-module.interface';
import { MessageService } from '@team31/services/message.service';
import { ProfileService } from '@team31/services/profile.service';
import { UserdataService } from '@team31/services/userdata.service';
import { Util } from './../../../static/util';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent {
	@Input() item: IEvent = <IEvent>{};
	constructor(
		private authService: ProfileService,
		private userdataService: UserdataService,
		private messageService: MessageService
	) {}

	clickParticipate(): void {
		const dataUser = { ...this.userdataService.getUserProfileData };
		const eventUser: IEventUser = {
			urlImage: this.item.urlImage,
			name: this.item.name,
			id: this.item.id
		};

		if (dataUser.events && dataUser.events.length >= 0) {
			dataUser.events.push(eventUser);
		} else {
			dataUser.events = [eventUser];
		}

		if (dataUser.activities && dataUser.activities.length > 0) {
			dataUser.activities.push(Util.getDescriptionActivity(this.item.name, 'evento'));
		} else {
			dataUser.activities = [Util.getDescriptionActivity(this.item.name, 'evento')];
		}

		try {
			this.item.disabled = true;

			this.authService.updateEventsData(dataUser.profile.uid, dataUser.events);
			this.authService.updateActivitiesData(dataUser.profile.uid, dataUser.activities);

			this.userdataService.setUserProfileData = dataUser;
			this.messageService.openInfo('Gracias por participa.', 'end', 'top');
		} catch (error) {
			this.item.disabled = false;
			this.messageService.openError('Ups, ocurrio un error intenta nuevamente.', 'end', 'top');
			console.error('Error al actualizar el perfil del usuario: ', error);
		}
	}
}
