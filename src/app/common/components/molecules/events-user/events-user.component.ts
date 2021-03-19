import { Component, Input, OnInit } from '@angular/core';
import { IEventUser } from '@team31/models/interfaces/profile-module.interface';
import { UserdataService } from '@team31/services/userdata.service';

@Component({
	selector: 'app-events-user',
	templateUrl: './events-user.component.html',
	styleUrls: ['./events-user.component.scss']
})
export class EventsUserComponent implements OnInit {
	constructor(private userdataService: UserdataService) {}
	listEvents: IEventUser[] = [];
	@Input() modeMovil = false;
	ngOnInit(): void {
		if (this.userdataService.getUserProfileData.events) {
			this.listEvents = this.userdataService.getUserProfileData.events;
		}
	}
}
