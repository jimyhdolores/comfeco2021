import { Component, OnInit } from '@angular/core';
import { ChannelProfileService } from '@team31/services/channel-submenus.service';
import { ISubMenu } from './../../models/profile.interface';

@Component({
	selector: 'app-sub-menu',
	templateUrl: './sub-menu.component.html',
	styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
	constructor(private channelProfileService: ChannelProfileService) {}
	menuSelected = false;
	listSubMenu: ISubMenu[] = [];

	ngOnInit(): void {
		this.listSubMenu = [
			{
				pathImage: 'assets/svg/profile_submenu.svg',
				name: 'Mi Perfil',
				select: true
			},
			{
				pathImage: 'assets/svg/insignia_submenu.svg',
				name: 'Insignias',
				select: false
			},
			{
				pathImage: 'assets/svg/team_submenu.svg',
				name: 'Grupos',
				select: false
			},
			{
				pathImage: 'assets/svg/calendar_submenu.svg',
				name: 'Eventos',
				select: false
			}
		];
	}

	onClickMenu(menu: ISubMenu): void {
		this.listSubMenu.forEach((menu) => (menu.select = false));
		menu.select = true;
		this.channelProfileService.showComponent(menu.name);
	}
}
