import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChannelProfileService } from '@team31/services/channel-submenus.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('200ms ease-out', style({ opacity: 1 }))
			]),
			transition(':leave', [style({ opacity: 1 }), animate('200ms ease-in', style({ opacity: 0 }))])
		])
	]
})
export class ProfilePageComponent implements OnInit, OnDestroy {
	panelOpenState = false;
	subscription!: Subscription;
	constructor(private channelProfileService: ChannelProfileService) {}
	titleSubMenu = 'Mi Perfil';
	nameComponeny = 'Mi Perfil';
	ngOnInit(): void {
		this.subscription = this.channelProfileService.channel$.subscribe((data) => {
			this.nameComponeny = data;
			this.titleSubMenu = data;
		});
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
