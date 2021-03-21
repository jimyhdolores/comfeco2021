import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvent } from '@team31/models/interfaces/profile-module.interface';
import { ProfileService } from '@team31/services/profile.service';
import { UserdataService } from '@team31/services/userdata.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-submodule-events',
	templateUrl: './submodule-events.component.html',
	styleUrls: ['./submodule-events.component.scss']
})
export class SubmoduleEventsComponent implements OnInit, OnDestroy {
	constructor(private profileService: ProfileService, private userdataService: UserdataService) {}
	listSkeleton = [1, 2, 3];
	listEvents: IEvent[] = [];
	subscription!: Subscription;
	ngOnInit(): void {
		this.subscription = this.profileService.getEvents().subscribe((events) => {
			if (events) {
				const listEvents = this.userdataService.getUserProfileData.events;

				this.listEvents = events.map((item) => {
					const disabled =
						listEvents !== undefined &&
						listEvents.find((eventUser) => eventUser.id === item.id) !== undefined;

					const eventComponent: IEvent = { ...item, disabled };

					return eventComponent;
				});
			}
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
